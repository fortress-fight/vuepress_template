module.exports = {
    // 网站的标题，同时会出现在页面的左上角导航旁边
    title: "Hellow VuePress",
    /**
     * 根路径，在文件中引用静态资源的时候使用 `$witchBase('/foo.png')`
     * <img :src="$withBase('/foo.png')" alt="foo">
     * 会自动拼接到 config.js 文件中所有静态资源 URL 中
     */
    base: "/",
    // 网站的描述
    description: "Just playing around",

    /**
     * 被注入页面 HTML <head> 额外的标签。
     * 每个标签可以用 [tagName, { attrName: attrValue }, innerHTML?] 的形式指定。
     * 例如，要添加自定义图标：['link', { rel: 'icon', href: '/logo.png' }]
     */
    head: [],
    /**
     * 指定此选项来使用自定义主题。使用 "foo" 的值，
     * VuePress 将尝试在 node_modules/vuepress-theme-foo/Layout.vue 加载主题组件。
     */
    theme: undefined,
    configureWebpack: {
        resolve: {
            alias: {
                "@alias": "path/to/some/dir"
            }
        }
    },
    markdown: {
        // 代码是否带有行数的标识
        lineNumbers: true,
        // 目录渲染层级
        toc: { includeLevel: [2, 3] }
    }
};
