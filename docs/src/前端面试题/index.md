## 前端面试题汇总

<script setup>
  const dataMap = {
    js: '1.JS',
    react: '2.Vue',
    vue: '3.React',
    webpack: '4.Webpack',
    network: '5.网络协议',
  }
  const data = [
    {
      text: "1.JS",
      collapsed: false,
      items: [
        {
          text: "1.Promise 的 finally 怎么实现的？",
          link: "/src/前端面试题/1.JS/1.Promise 的 finally 怎么实现的？"
        },
        {
          text: "2.Promise中then的第二个参数和catch的区别",
          link: "/src/前端面试题/1.JS/2.Promise中then的第二个参数和catch的区别"
        },
        {
          text: "3.generator 是怎么做到中断和恢复的？",
          link: "/src/前端面试题/1.JS/3.generator 是怎么做到中断和恢复的？"
        },
        {
          text: "4.为什么要区分宏任务和微任务？它们的执行优先级是什么？",
          link: "/src/前端面试题/1.JS/4.为什么要区分宏任务和微任务？它们的执行优先级是什么？"
        },
        { text: "5.Web Worker 是什么？", link: "/src/前端面试题/1.JS/5.Web Worker 是什么？" },
        {
          text: "6.说说你对 ToPrimitive 的理解",
          link: "/src/前端面试题/1.JS/6.说说你对 ToPrimitive 的理解"
        },
        {
          text: "7.怎么使用 Math.max、Math.min 获取数组中的最值？",
          link: "/src/前端面试题/1.JS/7.怎么使用 Math.max、Math.min 获取数组中的最值？"
        },
        {
          text: "8.var、let、const之间有什么区别？",
          link: "/src/前端面试题/1.JS/8.var、let、const之间有什么区别？"
        },
        { text: "9.es6新特性", link: "/src/前端面试题/1.JS/9.es6新特性" },
        {
          text: "10.导致 JavaScript 中 this 指向混乱的原因是什么",
          link: "/src/前端面试题/1.JS/10.导致 JavaScript 中 this 指向混乱的原因是什么"
        },
        {
          text: "11.如何让Promise.all在抛出异常后依然有效",
          link: "/src/前端面试题/1.JS/11.如何让Promise.all在抛出异常后依然有效"
        },
        { text: "12.Map和WeakMap的区别", link: "/src/前端面试题/1.JS/12.Map和WeakMap的区别" },
        { text: "13.如何实现softbind", link: "/src/前端面试题/1.JS/13.如何实现softbind" },
        {
          text: "14.在 js 中如何把类数组转化为数组",
          link: "/src/前端面试题/1.JS/14.在 js 中如何把类数组转化为数组"
        },
        {
          text: "15.如何实现 compose 函数，进行函数合成",
          link: "/src/前端面试题/1.JS/15.如何实现 compose 函数，进行函数合成"
        },
        { text: "16.如何使用js裁剪图片", link: "/src/前端面试题/1.JS/16.如何使用js裁剪图片" }
      ]
    },
    {
      text: "2.Vue",
      collapsed: false,
      items: [
        {
          text: "1.vue的响应式开发比命令式有什么优点？",
          link: "/src/前端面试题/2.Vue/1.vue的响应式开发比命令式有什么优点？"
        },
        {
          text: "2.Vue3有了解过吗？能说说跟Vue2的区别吗？",
          link: "/src/前端面试题/2.Vue/2.Vue3有了解过吗？能说说跟Vue2的区别吗？"
        },
        {
          text: "3.vue 中 $route 和 $router 有什么区别？",
          link: "/src/前端面试题/2.Vue/3.vue 中 $route 和 $router 有什么区别？"
        },
        {
          text: "4.Vue 3.0中Treeshaking特性是什么，并举例进行说明？",
          link: "/src/前端面试题/2.Vue/4.Vue 3.0中Treeshaking特性是什么，并举例进行说明？"
        },
        {
          text: "5.Vue组件间通信方式都有哪些",
          link: "/src/前端面试题/2.Vue/5.Vue组件间通信方式都有哪些"
        },
        {
          text: "6.自定义指令是什么？有哪些应用场景？",
          link: "/src/前端面试题/2.Vue/6.自定义指令是什么？有哪些应用场景？"
        },
        {
          text: "7.React 和 Vue 在技术层面有哪些区别？",
          link: "/src/前端面试题/2.Vue/7.React 和 Vue 在技术层面有哪些区别？"
        },
        {
          text: "8.为什么Vue中的v-if和v-for不建议一起用？",
          link: "/src/前端面试题/2.Vue/8.为什么Vue中的v-if和v-for不建议一起用？"
        },
        {
          text: "9.vue3 composition对比react hooks",
          link: "/src/前端面试题/2.Vue/9.vue3 composition对比react hooks"
        },
        {
          text: "10.vue-loader 的实现原理是什么",
          link: "/src/前端面试题/2.Vue/10.vue-loader 的实现原理是什么"
        }
      ]
    },
    {
      text: "3.React",
      collapsed: false,
      items: [
        {
          text: "1.useRef-ref-forwardsRef 的区别是什么？",
          link: "/src/前端面试题/3.React/1.useRef-ref-forwardsRef 的区别是什么？"
        },
        {
          text: "2.useEffect 的第二个参数, 传空数组和传依赖数组有什么区别？",
          link: "/src/前端面试题/3.React/2.useEffect 的第二个参数, 传空数组和传依赖数组有什么区别？"
        },
        {
          text: "3.如果在 useEffect 的第一个参数中 return 了一个函数，那么第二个参数分别传空数组和传依赖数组，该函数分别是在什么时候执行？",
          link: "/src/前端面试题/3.React/3.如果在 useEffect 的第一个参数中 return 了一个函数，那么第二个参数分别传空数组和传依赖数组，该函数分别是在什么时候执行？"
        },
        {
          text: "4.讲讲 React.memo 和 JS 的 memorize 函数的区别",
          link: "/src/前端面试题/3.React/4.讲讲 React.memo 和 JS 的 memorize 函数的区别"
        },
        {
          text: "5.怎么判断一个对象是否是 React 元素？",
          link: "/src/前端面试题/3.React/5.怎么判断一个对象是否是 React 元素？"
        },
        {
          text: "6.说说对 React 中Element、Component、Node、Instance 四个概念的理解",
          link: "/src/前端面试题/3.React/6.说说对 React 中Element、Component、Node、Instance 四个概念的理解"
        },
        {
          text: "7.实现 useUpdate 方法，调用时强制组件重新渲染",
          link: "/src/前端面试题/3.React/7.实现 useUpdate 方法，调用时强制组件重新渲染"
        },
        {
          text: "8.taro 的实现原理是怎么样的？",
          link: "/src/前端面试题/3.React/8.taro 的实现原理是怎么样的？"
        },
        {
          text: "9.taro 2.x 和 taro 3 最大区别是什么？",
          link: "/src/前端面试题/3.React/9.taro 2.x 和 taro 3 最大区别是什么？"
        },
        {
          text: "10.为什么Hooks不能写在条件语句或循环语句中？",
          link: "/src/前端面试题/3.React/10.为什么Hooks不能写在条件语句或循环语句中？"
        },
        {
          text: "11.Hooks为什么要写在函数的顶部？",
          link: "/src/前端面试题/3.React/11.Hooks为什么要写在函数的顶部？"
        },
        {
          text: "12.react hooks 如何替代或部分替代 redux 功能",
          link: "/src/前端面试题/3.React/12.react hooks 如何替代或部分替代 redux 功能"
        },
        {
          text: "13.useEffect 中如何使用 async和await",
          link: "/src/前端面试题/3.React/13.useEffect 中如何使用 async和await"
        },
        {
          text: "14.redux 解决什么问题，还有什么其他方案",
          link: "/src/前端面试题/3.React/14.redux 解决什么问题，还有什么其他方案"
        }
      ]
    },
    {
      text: "4.Webpack",
      collapsed: false,
      items: [
        {
          text: "1.说说你对 webpack5 模块联邦的了解？",
          link: "/src/前端面试题/4.Webpack/1.说说你对 webpack5 模块联邦的了解？"
        },
        {
          text: "2.聊聊 vite 和 webpack 的区别",
          link: "/src/前端面试题/4.Webpack/2.聊聊 vite 和 webpack 的区别"
        },
        {
          text: "3.webpack 中的 loader 的作用是什么",
          link: "/src/前端面试题/4.Webpack/3.webpack 中的 loader 的作用是什么"
        },
        {
          text: "4.webpack 中 plugin 的作用是什么，有没有自己写过",
          link: "/src/前端面试题/4.Webpack/4.webpack 中 plugin 的作用是什么，有没有自己写过"
        },
        {
          text: "5.使用 webpack 打包时，如何更好地利用 long term cache",
          link: "/src/前端面试题/4.Webpack/5.使用 webpack 打包时，如何更好地利用 long term cache"
        },
        {
          text: "6.js 代码压缩 minify 的原理是什么",
          link: "/src/前端面试题/4.Webpack/6.js 代码压缩 minify 的原理是什么"
        },
        {
          text: "7.webpack 中什么是 HMR，原理是什么",
          link: "/src/前端面试题/4.Webpack/7.webpack 中什么是 HMR，原理是什么"
        },
        { text: "8.Code Splitting是什么", link: "/src/前端面试题/4.Webpack/8.Code Splitting是什么" }
      ]
    },
    {
      text: "5.网络协议",
      collapsed: false,
      items: [
        { text: "1.TCP 和 UDP的区别是什么？", link: "/src/网络协议/1.TCP 和 UDP的区别是什么？" },
        {
          text: "2.Http 3.0 是基于 udp 的，那么它是如何保证传输可靠性的？",
          link: "/src/网络协议/2.Http 3.0 是基于 udp 的，那么它是如何保证传输可靠性的？",
        },
        {
          text: "3.https是如何保证安全的，又是如何保证不被中间人攻击的？",
          link: "/src/网络协议/3.https是如何保证安全的，又是如何保证不被中间人攻击的？",
        },
        { text: "4.说下 websocket 的连接原理", link: "/src/网络协议/4.说下 websocket 的连接原理" },
        { text: "5.websocket 中的 Handshaking 是什么？", link: "/src/网络协议/5.websocket 中的 Handshaking 是什么？" },
        { text: "6.说说DOS及DDOS的原理及防御方式", link: "/src/网络协议/6.说说DOS及DDOS的原理及防御方式" },
        { text: "7.说一说http缓存", link: "/src/网络协议/7.说一说http缓存" },
        { text: "8.http_proxy的原理是什么", link: "/src/网络协议/8.http_proxy的原理是什么" },
        { text: "9.gzip 的原理是什么，如何配置", link: "/src/网络协议/9.gzip 的原理是什么，如何配置" },
        { text: "10.可以对图片开启 gzip 压缩吗，为什么", link: "/src/网络协议/10.可以对图片开启 gzip 压缩吗，为什么" },
        { text: "11.http 响应头中的 ETag 值是如何生成的", link: "/src/网络协议/11.http 响应头中的 ETag 值是如何生成的" },
        {
          text: "12.http 服务中静态文件的 Last-Modified 是根据什么生成的",
          link: "/src/网络协议/12.http 服务中静态文件的 Last-Modified 是根据什么生成的",
        },
        {
          text: "13.既然 http 是无状态协议，那它是如何保持登录状态",
          link: "/src/网络协议/13.既然 http 是无状态协议，那它是如何保持登录状态",
        },
        {
          text: "14.localhost3000与localhost5000的cookie信息是否共享？",
          link: "/src/网络协议/14.localhost3000与localhost5000的cookie信息是否共享？",
        },
        {
          text: "15.http 响应头中如果 content-type 为 applicationoctet-stream，则代表什么意思",
          link: "/src/网络协议/15.http 响应头中如果 content-type 为 applicationoctet-stream，则代表什么意思",
        },
        {
          text: "16.http 向 https 做重定向应该使用哪个状态码",
          link: "/src/网络协议/16.http 向 https 做重定向应该使用哪个状态码",
        },
        {
          text: "17.http 响应头中的 Date 与 Last-Modified 有什么不同，网站部署时需要注意什么",
          link: "/src/网络协议/17.http 响应头中的 Date 与 Last-Modified 有什么不同，网站部署时需要注意什么",
        },
        { text: "18.http 1.1 中的 keep-alive 有什么作用", link: "/src/网络协议/18.http 1.1 中的 keep-alive 有什么作用" },
        {
          text: "19.当在浏览器中看到某资源使用了 http2 后，使用 curl 为什么看到的仍是 http 1.1",
          link: "/src/网络协议/19.当在浏览器中看到某资源使用了 http2 后，使用 curl 为什么看到的仍是 http 1.1",
        },
        { text: "20.什么是队首阻塞，如何解决", link: "/src/网络协议/20.什么是队首阻塞，如何解决" },
        { text: "21.什么是 CSRF 攻击", link: "/src/网络协议/21.什么是 CSRF 攻击" },
        { text: "22.no-cache 与 no-store 的区别是什么", link: "/src/网络协议/22.no-cache 与 no-store 的区别是什么" },
        { text: "23.cookie 有哪些字段", link: "/src/网络协议/23.cookie 有哪些字段" },
        { text: "24.http2 中的首部压缩的实现原理是什么", link: "/src/网络协议/24.http2 中的首部压缩的实现原理是什么" },
        {
          text: "25.http 请求头中的 X-Forwarded-For 代表什么意思",
          link: "/src/网络协议/25.http 请求头中的 X-Forwarded-For 代表什么意思",
        },
        {
          text: "26.fetch 中 credentials 指什么意思，可以取什么值",
          link: "/src/网络协议/26.fetch 中 credentials 指什么意思，可以取什么值",
        },
      ]
    }
  ]
</script>

## JS 部分

<div v-for="(item, index) in data.find(d => d.text === dataMap['js'])?.items" :key="index">
  <a :href="item.link.replace('/src/前端面试题', '.')">{{item.text}}</a>
</div>

## Vue 部分

<div v-for="(item, index) in data.find(d => d.text === dataMap['vue'])?.items" :key="index">
  <a :href="item.link.replace('/src/前端面试题', '.')">{{item.text}}</a>
</div>

## React 部分

<div v-for="(item, index) in data.find(d => d.text === dataMap['react'])?.items" :key="index">
  <a :href="item.link.replace('/src/前端面试题', '.')">{{item.text}}</a>
</div>

## Webpack 部分

<div v-for="(item, index) in data.find(d => d.text === dataMap['webpack'])?.items" :key="index">
  <a :href="item.link.replace('/src/前端面试题', '.')">{{item.text}}</a>
</div>

## 网络协议部分

<div v-for="(item, index) in data.find(d => d.text === dataMap['network'])?.items" :key="index">
  <a :href="item.link.replace('/src/前端面试题', '.')">{{item.text}}</a>
</div>
