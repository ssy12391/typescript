import axios from "https://esm.sh/axios";
import {
    ManipulateDOMs, print, ManipulatePromise, ReviewAjax,
    get_Response_By_Fetch, simple_form_With_Fetch,
    simple_Form_Post_Request_With_ajax, user_axios_for_post_request_with_form, use_promise_of_axios
} from "./baseCustomedTools.js";
import { ManipulateDOMsForCreatingSomeFrequentUsedElements } from "./simpleToolsForManipulateCSS.js";


let url = "http://httpbin.org"
let method = "post"
const my_tools = new ManipulateDOMs('工具箱', '基础开发支持', `封装代码复用`);
const my_projects = new ManipulateDOMsForCreatingSomeFrequentUsedElements('测试文档', "创建若干元素", "回测css");
let body = my_tools.getElementsWithQuerySelector(`body`)[0]
let form = my_projects.createFormElement().form
my_tools.addChildNodeToFatherNode(form, body)
let submit = my_tools.getElementWithQuerySelector('form  input[type = "submit"]')


url = "https://httpbin.org/get"
let promise = use_axios_for_get_request_with_form(submit, form, url)
let result=await use_promise_of_axios(promise)
print(result)

// promise.then((result) => { print(result); return result }).catch((error) => { print(error); return error }).finally(() => { print('任务结束'); return undefined })
