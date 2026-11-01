import { print, ManipulateDOMs } from "./customedTools.js";
import tools from "./customedTools.js";
const my_project = new ManipulateDOMs("操作测试页面");

let element = my_project.getElementById("form")
let result=tools.listenToTheElement(element,"click")

// print(`监听结果：${result}`)
// print(`dom元素内的值：${element.value}`)
