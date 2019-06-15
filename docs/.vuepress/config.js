module.exports = {
    // 网站的标题，同时会出现在页面的左上角导航旁边
    title: "Hellow VuePress",
    // 网站的描述
    description: "Just playing around",
    configureWebpack: {
        resolve: {
            alias: {
                "@alias": "path/to/some/dir"
            }
        }
    }
};
