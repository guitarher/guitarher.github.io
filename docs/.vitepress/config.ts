import { defineConfig } from 'vitepress'
import autoSideBar from './plugins/autoSidebar'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
// @ts-ignore
const environment = process.env.NODE_ENV
const __DEV__ = environment === "development"

export default defineConfig({
  title: "范范的前端小记",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ['script', { src: 'https://api.vvhan.com/api/bolang' }],
  ],
  vite: {
    plugins: [
      __DEV__ ? autoSideBar() : null
    ]
  },
  themeConfig: {
    nav: [
      { text: '网络协议', link: '/src/网络协议/1.TCP 和 UDP的区别是什么？' },
      { text: '前端面试题', link: '/src/前端面试题/' },
      { text: 'TS算法', link: '/src/leetcode每日一题/' },
      { text: '个人项目', items: [
        { text: 'React低代码', link: '/src/个人项目/React低代码/1.项目介绍' },
        { text: '简易版Vue3', link: '/src/个人项目/简易版Vue3/1.前言' }
      ] }, 
      { text: '随笔', link: '/src/随笔/' }
    ],
    sidebar: __DEV__ ? {} : sidebar,
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
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
  },
  markdown: {
    theme: {
      light: "slack-dark",
      dark: "slack-ochin",
    },
  },
})
