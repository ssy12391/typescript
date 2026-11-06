/**
 * # 模块说明
 * 
 * - 通过调用HTMLELEMENT.classList属性下的方法，改变元素的class属性，间接变动页面的CSS样式
 * - css用属性值设置
 * - 需要使用事件监听
 */
import { print, ManipulateDOMs, ManipulatePromise, acquireDOMsDynamicResultsFromPromise, usePromise } from "./baseCustomedTools.js";

/**
 * ## 函数说明
 * - **通过调用HTMLELEMENT.classList属性下的方法，改变元素的class属性，间接变动页面的CSS样式**
 * - css用属性值设置
 * - 需要使用事件监听
 * @param {string} className_for_css_style 
 * @param {string} shallowName 
 * @param {string} darkName 
 * @param {boolean} whether_automatic_loading 
 * @returns {HTMLButtonElement}
 */
export function buttonDesignedForChangingBackgroundColour(className_for_css_style, shallowName, darkName, whether_automatic_loading) {
    const my_tasks = new ManipulateDOMs(`添加一个更改页面背景颜色的按钮控件`);
    let bodys = my_tasks.getElementsWithQuerySelector("body")
    let body = bodys[0]
    let button = my_tasks.createElement("button")
    document.addEventListener("DOMContentLoaded", (event) => {
        button.innerText = shallowName
        button.addEventListener("click", (event) => {
            body.classList.toggle(className_for_css_style)
            if (
                body.classList.contains(className_for_css_style)) {
                button.innerText = darkName
            } else { button.innerText = shallowName }; return event;
        }); return event
    })
    if (whether_automatic_loading === true) {
        my_tasks.addChildNodeToFatherNode(button, body)
    } else {
        print(`未设置自动装载`)
    }

    return button

}