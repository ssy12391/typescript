/**
 * # 模块说明
 * - **页面主题切换工具模块**
 * - 该模块主要用于快速生成一个能够切换页面背景颜色的 `<button>` 控件。
 * - 核心逻辑依赖于 `ManipulateDOMs` 工具类以及原生 DOM 的 `classList` 属性。
 * 
 * ## 核心功能
 * - 自动在 `DOMContentLoaded` 阶段安全地绑定事件。
 * - 利用 CSS 类名（Class Name）的切换来驱动样式的改变。
 * - 动态同步按钮上的文字（如：日间模式 / 夜间模式）。
 * 
 * ## 依赖项
 * - 依赖自定义模块 `./baseCustomedTools.js` 中的 `print` 和 `ManipulateDOMs`。
 */
import { print, ManipulateDOMs, ManipulatePromise, acquireDOMsDynamicResultsFromPromise, usePromise } from "./baseCustomedTools.js";

/**
 * ## 函数说明
 * - 动态创建一个用于切换页面背景色的按钮控件。
 * - 执行流程：
    * 1. 实例化 DOM 工具类并获取 `<body>` 元素。
    * 2. 创建一个 `<button>` 元素，并在 `DOMContentLoaded` 事件触发后绑定 `click` 事件。
    * 3. 点击时，通过 `classList.toggle` 切换指定的 CSS 类名。
    * 4. 根据当前 `body` 是否包含该类名，动态切换按钮上的文字显示。
    * 5. 根据 `whether_automatic_loading` 参数，决定是否将按钮直接追加到页面的 `<body>` 中。
 * ### 参数说明
 * @param {string} className_for_css_style - 需要切换的 CSS 类名
 * - 该类名需在对应的 CSS 文件中提前定义好样式。
 * > **example**
 * >
 * > 调用函数后，参数`className_for_css_style`的值设置为"dark-mode"
 * >
 * > CSS文件中，必须同步用`dark-mode`作为selector的选择器，然后设置字体和背景样式
 * >```css
 * >.dark-mode {color: white;background-color: black;}
 * >```
 * @param {string} shallowName - 浅色模式（或默认模式）下，按钮上显示的文字（如："日间模式"）。
 * @param {string} darkName - 深色模式下，按钮上显示的文字（如："夜间模式"）。
 * @param {boolean} whether_automatic_loading - 是否自动装载。
 * - 传 `true` 则自动将按钮挂载到 `body` 尾部；
 * - 传 `false` 则仅返回按钮元素，由外部手动挂载。
 * ### 返回值说明
 * @returns {HTMLButtonElement} 返回创建好的DOM 元素对象——`button`。
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




