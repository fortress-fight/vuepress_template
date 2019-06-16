---
# YAML

# 禁用当前页面的顶部导航
# navbar: false

# 当前页面标签，默认为当前页面的 H1
# title: VuePress

# 最大值为2，用于覆盖 config.js 中的 sidebarDepth
# sidebarDepth: 2

# 首页没有侧边栏
# 生成仅包含当前页面的标题链接的侧边栏，设置为 false 表示禁止
# sidebar: auto

# 根据激活页面的侧边栏顺序自动推断上一个和下一个链接。你也可以使用 YAML front matter 来显式覆盖或禁用它们：
# prev: ./some-other-page
# next: false

# 隐藏指定页面上的编辑链接：
# editLink: false

# 自定义页面的 Class
pageClass: c-index_page

# 自定义页面布局
# 下面将会使用 .vuepress/components/SpecialLayout.vue。为当前页面渲染
# layout: SpecialLayout

home: true
heroImage: /hero.png
actionText: 起步 →
actionLink: /Introduction/
features:
    - title: 简明优先
      details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
    - title: Vue 驱动
      details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
    - title: 性能高效
      details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
