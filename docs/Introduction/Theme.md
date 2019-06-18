# 主题介绍

VuePress 附带一个默认主题（你现在看到的就是），专门为技术文档设计。它暴露许多选项，允许你自定义导航栏(navbar)、侧边栏(sidebar)和主页(homepage)等。详细信息请查看 [默认主题配置](https://www.vuepress.cn/default-theme-config/#%E5%88%B7%E6%96%B0%E5%86%85%E5%AE%B9%E7%9A%84%E5%BC%B9%E7%AA%97) 页面。

## 自定义主题

`../../default` 是通过 `vuepress eject [targetDir]` 导出的默认主题，如果需要对主题进行简单的定制只需要将其移动到对应的文件夹就可以了

## 从依赖中引用主题(using theme from a dependency)

主题可以在 npm 上以原始 Vue SFC 格式发布为 `vuepress-theme-xxx`。

要使用 npm 依赖项的主题，请在 `.vuepress/config.js` 中提供一个 theme 选项：

```js
module.exports = {
    theme: "awesome"
};
```

VuePress 将尝试定位并使用 node_modules/vuepress-theme-awesome/Layout.vue。
