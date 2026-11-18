import {
    ManipulateDOMs, ManipulatePromise,
    use_promise_of_axios, print
} from "./baseCustomedTools.js";
import { ManipulateDOMsForCreatingSomeFrequentUsedElements } from "./simpleToolsForManipulateCSS.js";
// import axios from "axios";
const my_tools = new ManipulateDOMs('工具箱', '基础开发支持', `封装代码复用`);
const my_projects = new ManipulateDOMsForCreatingSomeFrequentUsedElements('测试文档', "创建若干元素", "回测css");
export const my_promise_project = new ManipulatePromise("自定义promise", "自定义promise调用")
let body = my_tools.getElementsWithQuerySelector(`body`)[0]
let url = "http://192.168.12.5:5000/upload"

let options = {

    "file": "file", "submit": "submit"
}
let form = my_projects.createFormElement(url, "test_file_upload", "forms", "post", "form", options, `inputs`)["form"]
my_tools.setAttributeWithValue(form, "enctype", "multipart/form-data")
my_tools.addChildNodeToFatherNode(form, body)