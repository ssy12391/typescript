import {
    ManipulateDOMs

} from "./baseCustomedTools.js";
import { ManipulateDOMsForCreatingSomeFrequentUsedElements } from "./simpleToolsForManipulateCSS.js";


const my_tools = new ManipulateDOMs('工具箱', '基础开发支持', `封装代码复用`);
const my_projects = new ManipulateDOMsForCreatingSomeFrequentUsedElements('测试文档', "创建若干元素", "回测css");
let body = my_tools.getElementsWithQuerySelector(`body`)[0]
let form = my_projects.createFormElement().form
my_tools.addChildNodeToFatherNode(form, body)
let submit = my_tools.getElementWithQuerySelector('form  input[type = "submit"]')







