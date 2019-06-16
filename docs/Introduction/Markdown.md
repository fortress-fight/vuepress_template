# Markdown 扩展

这里只介绍常用项，完整的请参考官方文档 [Markdown 扩展](https://www.vuepress.cn/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9-header-anchors)

[[otc]]

## 链接

### 内部链接

-   以 .md 或 .html 结尾的内部链接，用于单页面应用程序(SPA)导航。
-   每个子目录下的 READEME.md 文件，将会被转化为 `index.html`

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

### 外部链接

外部链接会被自动地设置为 target="\_blank" rel="noopener noreferrer"：

## 自定义容器

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

## 在代码块中高亮显示行

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

## 其它

\[\[toc\]\] -- 目录的插入符号
