export class ManipulateDOMs {
    /**
     * 类属性，待更新
     * @type {any}
     */
    classAttribute = undefined
    /**
     * 类属性，待更新
     * @type {any}
     */
    classProperty = undefined
    /**
     * 实例属性，由构造函数赋值
     * @type {any}
     */
    attribute = undefined
    /**
     * 实例方法，由构造函数赋值
     * @type {Function}
     */
    method = undefined
    /**
     * 构造函数，建立实例属性
     * @param {any} parameters 实例属性的值，类的实例化对象需要传入
     */
    constructor(parameters) {
        this.attribute = parameters
        /**
         * 实例对象的方法，返回传入的参数
         * @param {any} parameters 方法的参数
         * @returns {any} 返回传入的参数
         */
        this.method = function 实例对象的方法(parameters) {
            console.log(`返回结果：${parameters}`)
            return parameters
        }
    }
    /**
     * 通过 id 获取页面元素
     * @param {string} id 元素的 id 属性值
     * @returns {HTMLElement | null | undefined} 找到返回元素，找不到返回 null，异常时返回 undefined
     */
    getElementById = (id) => {
        try {
            /**
             * 匹配到的 DOM 元素，可能为 null
             * @type {HTMLElement | null}
             */
            let element = document.getElementById(id);
            return element
        } catch (error) {
            console.log(`报错信息：${error}`)
            return undefined
        }
    }
    /**
     * 通过 class 属性获取元素集合
     * @param {string} className 元素的 class 属性值
     * @returns {HTMLCollectionOf<Element>} 匹配 className 的元素集合
     */
    getElementsByClass = function 通过class属性获取元素(className) {
        /**
         * 匹配 className 的元素集合
         * @type {HTMLCollectionOf<Element>}
         */
        const elements = document.getElementsByClassName(className)
        return elements
    }
    /**
     * 通过标签名获取元素集合
     * @param {string} tagName 符合 HTML5 语法的标签名
     * @returns {HTMLCollectionOf<HTMLElement>} 匹配标签名的元素集合
     */
    getElementsByTagName = function 根据元素名称获取元素(tagName) {
        /**
         * 匹配标签名的元素集合
         * @type {HTMLCollectionOf<HTMLElement>}
         */
        const elements = document.getElementsByTagName(tagName)
        return elements
    }
    /**
     * 创建指定标签名的元素
     * @param {string} tagName 符合 HTML5 语法的标签名
     * @returns {HTMLElement} 创建的元素
     */
    createElement = function 建立元素(tagName) {
        /**
         * 新创建的 DOM 元素
         * @type {HTMLElement}
         */
        const element = document.createElement(tagName)
        return element
    }
    /**
     * 把子节点添加到父节点
     * @param {HTMLElement} childNode 子元素
     * @param {HTMLElement} fatherNode 父元素
     * @returns {Array<HTMLElement>} 包含父元素和子元素的数组
     */
    addChildNodeToFatherNode = function 把dom子节点添加到dom父节点(childNode, fatherNode) {
        fatherNode.appendChild(childNode)
        /**
         * 包含父元素和子元素的数组
         * @type {Array<HTMLElement>}
         */
        const nodesArray = [childNode, fatherNode]
        return nodesArray
    }
    /**
     * 设置 DOM 元素的属性及属性值
     * @param {HTMLElement} element 目标 DOM 元素
     * @param {string} attributeName 符合 HTML5 语法的属性名
     * @param {any} attributeValue 属性值
     * @returns {HTMLElement} 设置好属性的元素
     */
    setAttributeWithValue = function 建立dom元素的属性并赋值(element, attributeName, attributeValue) {
        element.setAttribute(attributeName, attributeValue)
        return element
    }
    /**
     * 把文本插入到元素内
     * @param {HTMLElement} element 目标 DOM 元素
     * @param {string} text 要插入的文本
     * @returns {HTMLElement} 设置好文本的元素
     */
    insertTextIntoElements = function 把字符串文本插入到元素内(element, text) {
        element.innerText = text
        return element
    }
    /**
     * 把 HTML 代码插入到元素内
     * @param {HTMLElement} element 目标 DOM 元素
     * @param {string} html5Code 符合 HTML5 语法的 HTML 语句
     * @returns {HTMLElement} 设置好 HTML 的元素
     */
    insertHTMLCodeIntoNode = (element, html5Code) => {
        element.innerHTML = html5Code
        return element
    }
}
export class MainpulatePromise {
    /**
     * 类属性，待更新
     * @type {any}
     */
    classProperty = undefined
    /**
     * 类属性，待更新
     * @type {any}
     */
    classAttribute = undefined
    /**
     * 实例属性，由构造函数赋值
     * @type {any}
     */
    attribute = undefined
    /**
     * 实例属性，由构造函数赋值
     * @type {any}
     */
    property = undefined
    /**
     * 实例方法，由构造函数赋值
     * @type {((...args: any[]) => any) | undefined}
     */
    method = undefined
    /**
     * 构造函数，建立实例属性
     * @param {any} parameter 实例属性 attribute 的值
     * @param {any} argument 实例属性 property 的值
     */
    constructor(parameter, argument) {
        this.attribute = parameter
        this.property = argument
        /**
         * 实例方法：打印并返回传入的两个参数组成的数组
         * @returns {Array<any>} 包含 parameter 和 argument 的数组
         */
        this.method = () => { console.log(`${[parameter, argument]}`); return [parameter, argument] }
    }
    /**
     * 生成自定义开启时机和传递数据的 Promise 对象
     * @param {boolean} condition 触发条件，为 true 时调用 resolve，否则调用 reject
     * @param {any} valueWhenTrue 条件为真时传递给 resolve 的值
     * @param {any} valueWhenFalse 条件为假时传递给 reject 的值
     * @returns {Promise<any>} 自定义开启时机和传递数据的 Promise 对象
     */
    generatePromise(condition, valueWhenTrue, valueWhenFalse) {
        /**
         * 由条件控制开启时机的 Promise 对象
         * @type {Promise<any>}
         */
        const promise = new Promise((resolve, reject) => {
            if (condition == true) {
                resolve(valueWhenTrue)
            } else {
                reject(valueWhenFalse)
            }
        })
            ; return promise
    }
    /**
     * 以 async/await 异步函数的方式调用 Promise 对象
     * @param {Promise<any>} promise 自定义开启时机和传递数据的 Promise 对象
     * @returns {Promise<any>} Promise 对象触发后返回的数据（async 函数始终返回 Promise）
     */
    async usePromise(promise) {
        try {
            /**
             * Promise 对象符合条件时，触发后返回的数据
             * @type {any}
             */
            const result = await promise
            console.log(`Promise符合条件的结果：${result}`)
            return result

        }
        catch (error) {
            console.log(`报错内容：${error}`)
            return error
        }
    }

}

/**
 * ## 函数说明
 * - 手写ajax时需要
 * - 存储ajax的异步函数onreadystatechange在回调执行后返回的结果
 * @param {any} results 异步函数onreadystatechange在回调执行后返回的结果
 * @returns {any} 异步函数onreadystatechange在回调执行后返回的结果
 */
function get_results_from_callback_function(results) {
    return results
    
}


/**
 * ### 工具参数说明
 * - 如果是get请求发起Ajax,需要重新处理get链接，把参数拼接到GET请求的url中
 * @param {string} url ***尚未拼接查询参数***的原始GET请求url
 * @param {Record<string,string>} datas ***用于拼接GET请求url的***查询参数
 * @returns {{"url":string,"parameters":string}} 1. **url**：***已经拼接了查询参数***的GET请求url  
 * 2. **parameters**:***`object`格式的`datas`对象转化为符合Form表单形式的参数***
 */
function combine_GET_Requests_With_Query_Parameters_And_Get_Parameters(url, datas) {
    let datas_keys = Object.keys(datas)
    /**
     * 把对象转化为Form表单形式的参数
     * @type {string}
     */
    let parameters = `?`
    for (const element of datas_keys) {
        parameters = parameters + `${element}=${datas[element]}&`
        // console.log(parameters)
    }
    let base_url = `${url}${parameters}`
    /**
     * 拼接了查询参数的GET请求url
     *@type {string} 
     */
    let get_url = base_url.slice(0, base_url.length - 1)
    // console.log(get_url)
    return { "url": get_url, "parameters": parameters.slice(0,parameters.length-1) }
}
/**
 * #### 函数说明
 * - 针对json数据类型,发起get请求
 * @param {string} method 请求方法,默认为`GET`      
 * @param {{"Content-Type": "application/json","Accept": "application/json"}|Record<string,any>} headers 请求头，json数据类型默认请求头如上
 * @param {string} url  `GET`请求的url地址，如果有查询参数，需要把查询参数拼接到默认url尾部
 * @returns {any} 异步函数的回调执行后的返回值不会存储到函数,无法赋值给全局变量,只能在回调函数内部存储和操作网页dom元素
 */
function use_Ajax_For_Get_Request_With_Json(method, headers, url) {
    const xhr = new XMLHttpRequest();
    const headers_keys = Object.keys(headers)
    xhr.open(method, url)
    xhr.setRequestHeader(headers_keys[0], headers["Content-Type"])
    xhr.setRequestHeader(headers_keys[1], headers["Accept"])
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let result = xhr.responseText
                console.log(`返回结果：${result}`)
                return result
            } else {
                let code = xhr.status
                console.log(`响应码：${code}\n响应连接：${xhr.responseURL}`)
                return code
            }
        } else {
            let code = xhr.readyState
            console.log(`readyState当前状态码：${code}`)
            return code
        }
    }
    xhr.onerror = () => {
        let code = xhr.status

        console.log(`状态码：${code}\n响应连接：${xhr.responseURL}`)
    }
    return arguments
}


/**
 * #### 函数说明
 * - 针对json数据类型,发起POST请求
 * @param {string} method 请求方法,默认为`POST`      
 * @param {{"Content-Type": "application/json","Accept": "application/json"}|Record<string,any>} headers 请求头，json数据类型默认请求头如上
 * @param {string} url  `POST`请求对应的url地址，需要把在请求过程中发送参数
 * @param {Record<string,any>} datas `POST`需要发送给服务器的参数
 * @returns {any} 异步函数的回调执行后的返回值不会存储到函数,无法赋值给全局变量,只能在回调函数内部存储和操作网页dom元素
 */
function use_Ajax_For_Post_Request_With_Json(method, headers, url, datas) {
    const xhr = new XMLHttpRequest();
    const headers_keys = Object.keys(headers)
    xhr.open(method, url)
    xhr.setRequestHeader(headers_keys[0], headers["Content-Type"])
    xhr.setRequestHeader(headers_keys[1], headers["Accept"])
    /**
     * - `post`请求，send方法传递的参数,必须是字符串形式,需要用`JSON.stringify(object)`转化参数格式
     * @type {string} 对象转化为字符串后的参数
     */
    let datasOfString = JSON.stringify(datas)
    xhr.send(datasOfString)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let result = xhr.responseText
                console.log(`返回结果：${result}`)
                return result
            } else {
                let code = xhr.status
                console.log(`响应码：${code}\n响应连接：${xhr.responseURL}`)
                return code
            }
        } else {
            let code = xhr.readyState
            console.log(`readyState当前状态码：${code}`)
            return code
        }
    }
    xhr.onerror = () => {
        let code = xhr.status

        console.log(`状态码：${code}\n响应连接：${xhr.responseURL}`)
    }
    return arguments
}

// ----------------------------------json类型数据发起ajax请求-----------------------------------------
/**
 * 基本参数,包含请求方法和请求连接
 */
const options = {
    "url": "http://httpbin.org/get", "method": "GET",
}
/**
 * 请求头headers
 */
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}
/**
 * 请求参数,自定义,需要发送给服务器的
 */
const datas = { "username": "simon", "gender": "male" }
// ------json类型数据发起get请求---------------------------


const all_results = combine_GET_Requests_With_Query_Parameters_And_Get_Parameters(options["url"], datas)
console.log(`Form表单参数：${all_results["parameters"]}\n拼接查询参数后的get请求url:${all_results["url"]}`)

let results = use_Ajax_For_Post_Request_With_Json(`post`, headers, "http://httpbin.org/post", datas)
for (const element of results) {

    console.log(`测试返回值：${JSON.stringify(element)},${typeof (element)}`)
}




