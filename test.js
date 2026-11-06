
import { print, acquireDOMsDynamicResultsFromPromise, ManipulateDOMs, ManipulatePromise, simpleDebounce,usePromise } from "./baseCustomedTools.js";
import { buttonDesignedForChangingBackgroundColour } from "./simpleToolsForManipulateCSS.js";

print(`测试`, `异步调用回调函数`)
export function debounce(event_type, delay_time, element) {
    let timer = null
    element.addEventListener(event_type, (event) => {
        if (timer != null && timer != undefined) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            event.preventDefault()
            print(`防抖业务代码部分`)
            // print(`${event.target}`)
            // print(`${event.target.id}`)
            // print(`${event.target.value}`)
            // print(`${event.type}`)
            print(`${element.value}`); return undefined
        }, delay_time);
    })
}
export function throttle(event_type, delay_time, element_target) {
    let last_time = 0
    element_target.addEventListener(event_type, (event) => {
        let now = Date.now()
        event.preventDefault()
        if (now - last_time > 3000) {
            last_time = now
            setTimeout(() => {
                print(`节流业务代码部分`)
                // print(event.type)
                // print(event.target)
                // print(event.target.id)
                // print(event.target.value)
                return undefined
            }, delay_time);
        }
    })
    return arguments
}
const my_tasks = new ManipulateDOMs(`测试异步调用回调函数`);
/**
 * ### 变量说明
 * - form表单的`submit`，事件监听
 * @type {HTMLElement}
 */
let element_target = my_tasks.getElementWithQuerySelector(`body  form#form1>input[type="submit"]`)
/**
 * ### 变量说明
 * - 文本框，测试防抖机制
 * @type {HTMLTextAreaElement}
 */
let textarea = my_tasks.getElementWithQuerySelector(`body  form#form1>textarea[id="textarea0"]`)
element_target.classList.add(`submits`, `test_throttle`, `test_deboounce`)
// let bodys = my_tasks.getElementsByTagName("body")
// let body = bodys[0]
// document.addEventListener("DOMContentLoaded", (event) => {
//     let button = my_tasks.createElement("button")
//     my_tasks.setAttributeWithValue(button, "id", "button0")
//     my_tasks.setAttributeWithValue(button, "class", "buttons")
//     my_tasks.addChildNodeToFatherNode(button, body)
//     button.innerText = "日间模式"
//     button.addEventListener(`click`, (event) => {
//         body.classList.toggle('dark-mode');
//         if (body.classList.contains('dark-mode')) {
//             button.innerText = "夜间模式"
//         } else {
//             button.innerText = "日间模式"
//         }
//         ; return event
//     })
//     return undefined
// })

let button=buttonDesignedForChangingBackgroundColour("dark-mode","日间","夜间",true)