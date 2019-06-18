# Markdown 扩展

这里只介绍常用项，完整的请参考官方文档 [Markdown 扩展](https://www.vuepress.cn/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9-header-anchors)

[[otc]]

## 基础使用

### 链接

1. 内部链接

    - 以 .md 或 .html 结尾的内部链接，用于单页面应用程序(SPA)导航。
    - 每个子目录下的 READEME.md 文件，将会被转化为 `index.html`

    示例：

    ```shell
    .
    ├─ README.md
    ├─ foo
    │  ├─ README.md
    │  ├─ one.md
    │  └─ two.md
    └─ bar
    ├─ README.md
    ├─ three.md
    └─ four.md
    ```

    如果需要对上述目录中的文件进行引用：

    ```md
    [Home](/) <!-- 将根目录下的 README.md 发送给用户 -->
    [foo](/foo/) <!-- 将 foo 目录下的 README.md 发送给用户 -->
    [foo 标题锚点](/foo/#heading) <!-- 跳转到 foo 目录下的 README.md 文件中的特定锚点位置 -->
    [foo - one](/foo/one.html) <!-- 追加 .html -->
    [foo - two](/foo/two.md) <!-- 或者追加 .md -->
    ```

2. 外部链接

    外部链接会被自动地设置为 target="\_blank" rel="noopener noreferrer"：

### 自定义容器

**输入**

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::
```

**输出**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

如果使用 VSCode 可以为 Markdown 添加 snippets 如下

```json
{
    "Print VuePress Block": {
        "prefix": "vblock",
        "body": ["::: ${1|tip, warning, danger|} $2", "$3", ":::"]
    }
}
```

### 在代码块中高亮显示行

**输入**

````md
```js{4}
export default {
    data() {
        return {
            msg: "Highlighted!"
        };
    }
};
```
````

**输出**

```js{4}
export default {
    data() {
        return {
            msg: "Highlighted!"
        };
    }
};
```

### 导入代码片段

**输入**

```md
<<< @/docs/Introduction/codes/test.js{2}
```

::: tip TIP
由于导入的代码片段会在 webpack 编译之前执行，因此你无法在 webpack 中使用路径别名。@ 的默认值是 process.cwd（） 。
:::

**输出**

<<< @/docs/Introduction/codes/test.js{2}

### 其它

\[\[toc\]\] -- 目录的插入符号

## 在 Markdown 中使用 Vue

-   我们可以在 md 文件中使用 Vue 中的，插值以及指令
-   我们可以通过变量 `$page` 访问网站的元数据

    ::: v-pre

    ```md
    {{$page}}
    ```

    :::

-   默认情况下，花括号代码块(fenced code blocks)会自动用 v-pre 包装。如果要在内联代码片段或纯文本内显示原始插值或特定于 Vue 的语法，则需要把段落包裹在 v-pre 自定义容器中：

    ```md
    ::: v-pre
    `{{ This will be displayed as-is }}`
    :::
    ```

-   我们还可以在 Markdown 中使用，组件（.vuepress/components 中的所有 \*.vue 文件都会自动注册为 全局(global)异步(async) 组件。）例如：

    路径：docs/.vuepress/components/dome.vue

    <<< @/docs/.vuepress/components/dome.vue

    输入：`<dome/>`

    输出：<dome/>

### 在 Markdown 中添加样式

有时候，你可能只需要当前页面应用一些 JavaScript 或 CSS。在这些情况下，你可以在 markdown 文件中，直接编写根级别的 `<script>` 和 `<style>` 标签，它们会从编译后的 HTML 中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

### 内置组件

**OutboundLink**

用于表示这是一个外部链接。在 VuePress 中，每个外部链接后面，都跟着一个这样的组件。

**ClientOnly**

**Content**

-   Props:

        - custom - boolean

-   用法：当前 .md 文件的编译后内容，会在这里进行渲染。当你使用 自定义布局 时，这将非常有用

**Badge**

-   Props:

    -   text - string
    -   type - string, 可选值："tip"|"warn"|"error", 默认值是："tip".
    -   vertical - string, 可选值："top"|"middle", 默认值是："top".

-   用法：这个组件可以用在标题文本的末尾，用来为某些 API 添加一些状态：

输入：

```md
<Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
```

输出：

<Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
