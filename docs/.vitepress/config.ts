import { defineConfig } from 'vitepress'
import autoSideBar from './plugins/autoSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs',
  title: "范范的前端小记",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://api.vvhan.com/api/bolang' }],
  ],
  vite: {
    plugins: [
      autoSideBar()
    ]
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '面试题库', link: '/src/js基础/' },
      { text: 'TS算法', link: '/src/leetcode每日一题/' },
      { text: 'Vue', link: '/src/vue/' },
      { text: '随笔', link: '/src/随笔/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/guitarher' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
