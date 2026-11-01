import { print, ManipulateDOMs } from "./customedTools.js";



const my_project = new ManipulateDOMs("操作测试页面");

let form = my_project.getElementById("form")

print(`结果:${form}`)

form.addEventListener("click", (event) => { event.defaultPrevented()
    print(event.target); print(event.type) })