# cli-web

> A Vue.js project

用Vue-Cli脚手架  规范开发目录和开发流程，中间加入了Vuex和ES6

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9090
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构
<pre>
│ .gitignore          # 忽略无需git控制的文件  比如 node_modules
│ package.json        # 项目配置
│ README.md           # 项目说明
│ index.html          # 首页
│ build               # webpack 配置文件
│
├─node_modules
│
│
├─static               # 发布目录
│
│
└─src                  # 开发目录
    │  main.js         # 入口JS
    │  App.vue         # 主vue
    │  filters.js      # 过滤器
    │  routes.js       # 路由
    │
    ├─components       # 组件
    │        my-component.vue
    │
    ├─assets           # 静态资源文件(images,font,js,css)
    │     
    │     
    ├─utils            # 工具函数
    │     
    │     
    ├─vuex            # vuex相关文件
    │ 
    │ 
    └─views            # 页面
            list.vue
</pre>

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
