# VuePress Template

[VuePress](https://www.vuepress.cn/): Vue 驱动的静态站点生成工具

[[toc]]

## 目录结构介绍

```shell
.
├── .cz-config.js
├── .gitignore
├── README.md
├── commitlint.config.js
├── docs
│   ├── .vuepress
│   │   ├── config.js
│   │   ├── enhanceApp.js
│   │   ├── override.styl
│   │   └── public
│   │       └── hero.png
│   ├── Introduction
│   │   └── README.md
│   ├── README.md
│   └── image
├── package-lock.json
└── package.json
```

-   `./docs/.vuepress/` 用于放置所有 VuePress 特有文件的地方
-   `./docs/.vuepress/public/` 用于放置所有 VuePress 中静态文件的地方
-   `./docs/.vuepress/config.js` 是站点基本文件，输入 JS 对象
-   `./docs/.vuepress/enhanceApp.js` 应用程序级别的增强功能
-   `./docs/.vuepress/style.styl` 对默认主题的样式应用简单的覆盖，应该在编译 CSS 之前执行
-   `./docs/.vuepress/override.styl` 对默认主题的样式应用简单的覆盖，在 CSS bundle 末尾生成，它具有最高优先级。

## 功能介绍

### 搜索

VuePress 带有内置的 基于 header 搜索(`headers-based search`) 的功能 - 它会自动从所有页面的 title, h2 和 h3 header 标签中，建立一个简单的搜索索引。（译者注：此搜索是遍历 pages 数组的每一项，取出其中的 headers 数组，其中数组每项对应 markdown 标题，具体代码查看 /lib/default-theme/SearchBox.vue 的 suggestions 函数）

### 静态资源处理

[静态资源](https://www.vuepress.cn/guide/assets.html#%E7%9B%B8%E5%AF%B9-urls)将有 webpack 处理，我们可以使用相对路径，将其交给 webpack。还可以使用 webpack 别名来引用文件。我们可以在 `.vuepress/config.js` 中的 `configureWebpack` 字段里进行配置。

1. 公共文件

    `.vuepress/public` 中的文件将被复制到生成目录的根目录。

2. 基准 URL

    如果你的网站部署到非根 URL，则需要在 .vuepress/config.js 中设置 base 选项。

## 主题介绍

VuePress 附带一个默认主题（你现在看到的就是），专门为技术文档设计。它暴露许多选项，允许你自定义导航栏(navbar)、侧边栏(sidebar)和主页(homepage)等。详细信息请查看 [默认主题配置](https://www.vuepress.cn/default-theme-config/#%E5%88%B7%E6%96%B0%E5%86%85%E5%AE%B9%E7%9A%84%E5%BC%B9%E7%AA%97) 页面。
