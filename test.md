# task:30%

- add `docstring` for projects codes

## Description:30%

- Please add  the docstrings for the whole module or functions following the template which was mentioned as follows

## the template of the docstring

```JavaScript
/**

* ## 函数说明

* * 动态创建一个用于切换页面背景色的按钮控件。
* * 执行流程：
  * 1. 实例化 DOM 工具类并获取 `<body>` 元素。
  * 1. 创建一个 `<button>` 元素，并在 `DOMContentLoaded` 事件触发后绑定 `click` 事件。
  * 1. 点击时，通过 `classList.toggle` 切换指定的 CSS 类名。
  * 1. 根据当前 `body` 是否包含该类名，动态切换按钮上的文字显示。
  * 1. 根据 `whether_automatic_loading` 参数，决定是否将按钮直接追加到页面的 `<body>` 中。

* ### 参数说明

* @param {string} className_for_css_style - 需要切换的 CSS 类名
* * 该类名需在对应的 CSS 文件中提前定义好样式。
* > **example**
* >
* > 调用函数后，参数`className_for_css_style`的值设置为"dark-mode"
* >
* > CSS文件中，必须同步用`dark-mode`作为selector的选择器，然后设置字体和背景样式
>
* >```css
* >.dark-mode {color: white;background-color: black;}
>
* >```
* @param {string} shallowName - 浅色模式（或默认模式）下，按钮上显示的文字（如："日间模式"）。
* @param {string} darkName - 深色模式下，按钮上显示的文字（如："夜间模式"）。
* @param {boolean} whether_automatic_loading - 是否自动装载。
* * 传 `true` 则自动将按钮挂载到 `body` 尾部；
* * 传 `false` 则仅返回按钮元素，由外部手动挂载。

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
```

## Demand:40%

- ***forbid modifyiy the codes of mine even one row!***  I will inspect codes and correct the bugs by myself
- when you add the docstring，you should strictly **imitate** the docstring mentioned above not only logic but also structures

### my_codes

```JavaScript



```
