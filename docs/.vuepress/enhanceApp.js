import jquery from "jquery";
import ClipboardJS from "clipboard";
import "./styles/font-awesome.css";

export default ({
    Vue, // 当前 VuePress 应用所使用的 Vue 版本
    options, // 根 Vue 实例的选项
    router, // 应用程序的路由实例
    siteData // 网站元数据
}) => {
    // ...使用应用程序级别的增强功能
    window.$ = jquery;
    console.log(this);
    router.afterHooks.push(function() {
        Vue.nextTick(dom_loaded);
    });
};

function dom_loaded() {
    // setTimeout(() => {}, 200);
    $("body").on("mouseenter", "pre", function() {
        let copy_btn = $(this).find(".copy_btn");
        if (!copy_btn.length) {
            copy_btn = $(
                "<div class='copy_btn'><i class='fa fa-copy'></div>"
            ).appendTo(this);
            new ClipboardJS(copy_btn[0], {
                target: trigger => {
                    return $(this).find("code")[0];
                }
            });
        }
    });
}
