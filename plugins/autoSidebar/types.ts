/**
 * 类型文件
 */

interface FileInfo {
  name: string
  isFolder: boolean
  createTime: number
  updateTime: number
  hide?: boolean
  sort?: number
  title?: string
  collapsed?: boolean
  children: FileInfo[]
}

interface PluginSettings {
  [key: string]: Pick<FileInfo, 'hide' | 'sort' | 'title'> & { collapsed?: boolean }
}

interface Options {
  pattern?: string | string[]
  settings?: PluginSettings
  compareFn?: (a: FileInfo, b: FileInfo) => number
}

export type { FileInfo, PluginSettings, Options }