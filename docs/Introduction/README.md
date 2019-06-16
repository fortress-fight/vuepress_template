# 简介

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
