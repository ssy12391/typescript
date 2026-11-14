import axios from "https://esm.sh/axios";
import { ManipulateDOMs, print, ManipulatePromise, ReviewAjax, get_Response_By_Fetch, simple_form_With_Fetch, simple_Form_Post_Request_With_ajax, } from "./baseCustomedTools.js";
import { ManipulateDOMsForCreatingSomeFrequentUsedElements } from "./simpleToolsForManipulateCSS.js";


let url = "http://httpbin.org"
let method = "post"
const my_tools = new ManipulateDOMs('工具箱', '基础开发支持', `封装代码复用`);
const my_projects = new ManipulateDOMsForCreatingSomeFrequentUsedElements('测试文档', "创建若干元素", "回测css");
let body = my_tools.getElementsWithQuerySelector(`body`)[0]
let form = my_projects.createFormElement().form
my_tools.addChildNodeToFatherNode(form, body)
let submit = my_tools.getElementWithQuerySelector('form  input[type = "submit"]')
method = "get"






promise.then((result) => { print(result); return result }).catch((error) => { print(error); return error }).finally(() => { print('任务结束'); return undefined })

function use_axios_for_get_with_form(submit,form,url) {
    const promise = new Promise((resolve, reject) => {
        submit.addEventListener("click", async (event) => {
            event.preventDefault();
            let formData = new FormData(form);
            let parameter = new URLSearchParams(Object.fromEntries(formData.entries())).toString();
            let get_url = `${url}/get?${parameter}`;
            try {
                let response = await axios.get(get_url, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                });
                let result = response.data;
                resolve(result);
            } catch (error) { reject(`报错信息:\n${error}`); throw new Error(`报错信息:\n${error}`); return error; } return event;
        });
    });
    return promise
}

