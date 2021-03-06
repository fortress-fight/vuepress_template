# 功能介绍

<!-- 这里是目录渲染的标识 -->

[[toc]]

## 搜索

VuePress 带有内置的 基于 header 搜索(`headers-based search`) 的功能 - 它会自动从所有页面的 title, h2 和 h3 header 标签中，建立一个简单的搜索索引。（译者注：此搜索是遍历 pages 数组的每一项，取出其中的 headers 数组，其中数组每项对应 markdown 标题，具体代码查看 /lib/default-theme/SearchBox.vue 的 suggestions 函数）

## 静态资源处理

[静态资源](https://www.vuepress.cn/guide/assets.html#%E7%9B%B8%E5%AF%B9-urls)将有 webpack 处理，我们可以使用相对路径，将其交给 webpack。还可以使用 webpack 别名来引用文件。我们可以在 `.vuepress/config.js` 中的 `configureWebpack` 字段里进行配置。

1. 公共文件

    `.vuepress/public` 中的文件将被复制到生成目录的根目录。

2. 基准 URL

    如果你的网站部署到非根 URL，则需要在 .vuepress/config.js 中设置 base 选项。
