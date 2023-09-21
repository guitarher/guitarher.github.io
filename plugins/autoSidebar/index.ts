// @ts-ignore
import { sep, normalize, join, extname } from 'node:path'
import glob from 'fast-glob'
import fs from 'fs-extra'
import type { Plugin, UserConfig, ViteDevServer } from 'vite'
import type { DefaultTheme, SiteConfig } from 'vitepress'
import { FileInfo, Options } from './types'

const mdRelationMap = new Map<string, string>()

export default function (options: Options = {}): Plugin {
  return {
    name: 'auto-sidebar',

    handleHotUpdate(context){
      const { file, modules, server } = context

      // 过滤非 md 文件
      if (extname(file) !== '.md') return;
      
      // 如果文件变化重新开启服务
      server.restart()
    },

    async config(config) {
      const _config = config as UserConfig & { vitepress: SiteConfig }

      // 从vitepress配置中获取文档根路径与要排除的文档
      const {
        vitepress: {
          userConfig: { srcExclude = [], srcDir = './docs/src' },
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
      _config.vitepress.site.themeConfig.sidebar = sidebar

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
 * 优先按 sort 排序，其次时间戳排序，navSort 始终优先于时间戳
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

  for (const { name, children } of structuredData[0].children) {
    if(name === 'src'){
      for (const { name, children: subChildren } of children) {
        const traverArr = subChildren.filter(v => v.name !== 'index.md')
        sidebar[`/src/${name}/`] = traverseSubFile(traverArr, `/src/${name}`)
      }
    }
  }

  function traverseSubFile(subData: FileInfo[], parentPath: string): DefaultTheme.SidebarItem[] {
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