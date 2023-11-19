// @ts-ignore
import { sep, normalize, join, extname } from 'node:path'
import glob from 'fast-glob'
import fs from 'fs-extra'
import type { Plugin, UserConfig, ViteDevServer } from 'vite'
import type { DefaultTheme, SiteConfig } from 'vitepress'
import { FileInfo, Options } from './types'

export default function (options: Options = {}): Plugin {
  return {
    name: 'auto-sidebar',

    handleHotUpdate(context){
      const { file, modules, server } = context

      // 过滤非 md 文件
      if (extname(file) !== '.md') return;
      
      try {
        // 如果文件变化重新开启服务
        server.close()
        server.restart()
      } catch (error) {
        console.error(error)
      }

      return [...modules]
    },

    async config(config) {
      // @ts-ignore
      const environment = process.env.NODE_ENV
      const __DEV__ = environment === "development"

      const _config = config as UserConfig & { vitepress: SiteConfig }

      // 从vitepress配置中获取文档根路径与要排除的文档
      const {
        vitepress: {
          userConfig: { srcExclude = [], srcDir = './' },
          site: {
            themeConfig: { nav },
          },
        },
      } = _config

      // 支持手动传入匹配模式或匹配全部
      const pattern = options.pattern || '**/*.md'

      // 读取需要的md文件
      const paths = (
        await glob(pattern, {
          cwd: srcDir,
          ignore: ['**/node_modules/**', '**/dist/**', 'index.md', ...srcExclude]
        })
      )
        .map((path) => normalize(path))
        .sort()

      // 处理文件路径数组为多级结构化数据
      const data = serializationPaths(paths, options, srcDir)

      // 数据排序
      sortStructuredData(data, options.compareFn)

      // 生成侧边栏目录
      const sidebar = generateSidebar(data)

      if(__DEV__){
        _config.vitepress.site.themeConfig.sidebar = sidebar
      }

      
      // @ts-ignore
      const filePath = join(__dirname, '../../sidebar.ts')
      await clearFile(filePath) // 先清空内容

      const content = `
        export default ${JSON.stringify(sidebar)}
      `

      fs.writeFile(filePath, content , (error) => {
          // 创建失败
          if(error){
            console.log(`创建失败：${error}`)
          }
      })

      return _config
    },
  }
}

/**
 * 处理文件路径数组为多级结构化数据
 * @param paths 
 * @param options 
 * @param srcDir 
 * @returns 
 */
function serializationPaths(paths: string[], { settings = {} }: Options = {}, srcDir: string) {
  // 统一路径格式，便于匹配
  for (const key in settings) {
    settings[join(srcDir, key)] = settings[key]
  }
  const root: FileInfo[] = []

  for (const path of paths) {
    // 获取路径中的每一级名称
    const pathParts = join(srcDir, path).split(sep)

    let currentNode = root
    let currentPath = ''

    for (const name of pathParts) {
      currentPath = join(currentPath, name)

      // 获取时间戳
      const stat = fs.statSync(currentPath)
      const { birthtimeMs: createTime, ctimeMs: updateTime } = stat
      const isFolder = stat.isFile() // 是否是文件
      const isDic = stat.isDirectory() // 是否是文件夹

      let childNode = currentNode.find((node) => node.name === name)

      if (!childNode) {
        childNode = { name, isFolder, createTime, updateTime, children: [] }
        currentNode.push(childNode)
      }

      currentNode = childNode.children
    }
  }
  return root
}

/**
 * 对结构化后的多级数组数据进行逐级排序
 */
function sortStructuredData(data: FileInfo[], compareFn?: (a: FileInfo, b: FileInfo) => number): FileInfo[] {
  if (typeof compareFn !== 'function') {
    compareFn = (a, b) => {
      if (a.sort !== undefined && b.sort !== undefined) {
        return b.sort - a.sort
      } else if (a.sort !== undefined) {
        return -1
      } else if (b.sort !== undefined) {
        return 1
      } else {
        return a.createTime - b.createTime
      }
    }
  }
  return data.sort(compareFn).map((item) => {
    if (item.children && item.children.length > 0) {
      item.children = sortStructuredData(item.children, compareFn)
    }
    return item
  })
}

/**
 * 生成 sidebar
 */
function generateSidebar(structuredData: FileInfo[]): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.Sidebar = {}

  const sourceData = structuredData.find((item) => item.name === 'docs')

  for (const { name, children } of sourceData!.children) {
    if(name === 'src'){
      for (const { name, children: subChildren } of children) {
        const traverArr = subChildren.filter(v => v.name !== 'index.md')
        sortByNo(traverArr)
        sidebar[`/src/${name}/`] = traverseSubFile(traverArr, `/src/${name}`)
      }
    }
  }

  function traverseSubFile(subData: FileInfo[], parentPath: string): DefaultTheme.SidebarItem[] {
    sortByNo(subData)
    return subData.map((file) => {
      const filePath = `${parentPath}/${file.name}`
      const fileName = file.title || file.name.replace('.md', '')
      if (!file.isFolder) {
        return {
          text: fileName,
          collapsed: file.collapsed ?? false,
          items: traverseSubFile(file.children, filePath),
        }
      } else {
        return { text: fileName, link: filePath.replace('.md', '') }
      }
    })
  }

  return sidebar
}

/**
 * 清空文件内容
 * @param filePath 
 * @returns 
 */
function clearFile(filePath: string) {
  // 写入文件是异步过程，需要使用promise保证文件操作完成 
  return new Promise(resolve => {
    fs.writeFile(filePath, '', "utf-8", function(err) {
      if (err) {
        throw new Error("写入数据失败");
      } else {
        resolve(null)
      }
    })
  })
}

function sortByNo(data){
  // 排序
  data.sort((pre, cur) => {
    const { name: preName } = pre
    const { name: curName } = cur
    const preNameArr = preName.split('.')
    const curNameArr = curName.split('.')

    if(!isNaN(+preNameArr[0]) && !isNaN(+curNameArr[0])){
      return (+preNameArr[0]) - (+curNameArr[0])
    }

    return -1
  })
}