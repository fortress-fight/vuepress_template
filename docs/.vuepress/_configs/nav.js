module.exports = {
    // 顶部导航，如果需要禁用导航，需要设置 navbar: false
    nav: [
        /**
             * 如果需要使用多级导航，示例：
             * {
                    text: "Languages",
                    items: [
                        { text: "Chinese", link: "/language/chinese" },
                        { text: "Japanese", items: [
                            { text: "Home", link: "/" }
                        ] }
                    ]
                }
             */
        { text: "Home", link: "/" },
        /**
         * 如果 link 是一个目录，将会默认指向该目录下的 README.md
         */
        { text: "Introduction", link: "/Introduction/" }
    ]
};
