module.exports = {
    /**
         *  侧边栏
         * 如果希望自动生成仅包含当前页面的标题链接的侧边栏，可以设置 sidebar: auto.
         * 如果希望在某个页面上设置，还可以如下所示：
         * '/': {
            sidebar: 'auto'
            }
         * 设置为 false 表示禁止
         */
    sidebar: [
        "/",
        /**
         * 你可以省略 .md 扩展名，以 / 结尾的路径被推断为 *\/README.md 。
         * 该链接的文本是自动推断的（从页面的第一个标题或 YAML front matter 中的显式标题）。
         * 如果你希望明确指定链接文本，请使用 \[link,text] 形式的数组。
         * "/Introduction/"
         */

        /**
         * 侧边栏可以分组，形式如下
         */
        {
            title: "简介",
            collapsable: false,
            children: [
                "/Introduction/",
                "/Introduction/Feature",
                "/Introduction/Theme",
                "/Introduction/Markdown"
            ]
        },
        {
            title: "官方文档",
            collapsable: false,
            children: [
                ["https://www.vuepress.cn/", "VuePress"],
                [
                    "https://www.vuepress.cn/default-theme-config/",
                    "默认主题配置"
                ],
                [
                    "https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE-basic-config",
                    "配置参考"
                ]
            ]
        }
    ],

    // 侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下
    sidebarDepth: 2,
    /**
     * 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，
     * 你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：
     */
    displayAllHeaders: false
};
