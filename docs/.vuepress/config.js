const nav = require("./_configs/nav");
const sidebar = require("./_configs/sidebar");
const github = require("./_configs/github");

const themeConfig = Object.assign(
    {
        /**
         * 默认情况下，当用户滚动页面，查看不同部分时，
         * 嵌套的标题链接和 URL 中的哈希值会随之更新，
         * 此行为可以通过以下的主题配置来禁用：
         */
        activeHeaderLinks: true,

        /**
         * 表示是否禁用搜索框
         * 如果你需要全文搜索，内置搜索只能从标题 h2 和 h3 标题构建索引，
         * 你可以使用 [Algolia](https://www.vuepress.cn/default-theme-config/#algolia-search) 搜索。
         *  algolia: {
                apiKey: '<API_KEY>',
                indexName: '<INDEX_NAME>'
            }
         */

        search: true,
        searchMaxSuggestions: 10,

        /**
         *  lastUpdated: 选项允许你获取每个文件的最后一次 git 提交的 UNIX 时间戳（ms），
         * 并且它也会以合适的格式显示在每个页面的底部
         * 请注意，它默认是关闭的，如果给定一个 string 类型的值，它将会作为前缀显示（默认值是：Last Updated）。
         */
        lastUpdated: "更新时间："
    },
    nav,
    sidebar,
    github
);

module.exports = {
    // 网站的标题，同时会出现在页面的左上角导航旁边
    title: "VuePress Template",
    /**
     * 根路径，在文件中引用静态资源的时候使用 `$witchBase('/foo.png')`
     * <img :src="$withBase('/foo.png')" alt="foo">
     * 会自动拼接到 config.js 文件中所有静态资源 URL 中
     */
    base: "/vuepress_template/",
    // 网站的描述
    description: "Just playing around",

    /**
     * 被注入页面 HTML <head> 额外的标签。
     * 每个标签可以用 [tagName, { attrName: attrValue }, innerHTML?] 的形式指定。
     * 例如，要添加自定义图标：['link', { rel: 'icon', href: '/logo.png' }]
     */
    head: [],
    /**
     * 指定此选项来设置默认的自定义主题。使用 "foo" 的值，
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
        toc: { includeLevel: [2, 3] },
        config: md => {
            // 使用更多 [markdown-it](https://github.com/markdown-it/markdown-it) 插件！
            // md.use(require("markdown-it-xxx"));
        }
    },
    themeConfig
};
