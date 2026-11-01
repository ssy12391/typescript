import { print, ManipulateDOMs } from "./customedTools.js";
const my_project = new ManipulateDOMs("操作测试页面");

let element = my_project.getElementById("form")

element.addEventListener("click", (event) => {
    // event.preventDefault()
    print(`事件对象:${event.target}`)
    print(`事件类型:${event.type}`)
    print(`事件对象id:${event.target.id}`)
    print(`事件对象的值:${event.target.value}`)
})
print(`dom元素内的值：${element.value}`)
