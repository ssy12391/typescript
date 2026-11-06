/**
 * @file 这是一个综合性的前端工具库 (Frontend Utility Library)。
 * 封装了日常开发中高频使用的 DOM 操作、异步流程控制、网络请求以及定时任务。
 *
 * @module FrontendUtils
 * @author Simon
 * 
 * @description
 * 核心模块包含：
 * 1. **ManipulateDOMs**：DOM 操作类。封装了元素获取、创建、挂载、属性设置及内容修改。
 * 2. **ManipulatePromise**：Promise 工具类。提供自定义触发时机的 Promise 生成，以及 async/await 的优雅调用封装。
 * 3. **ReviewAjax**：原生 Ajax 封装类。使用 XMLHttpRequest 实现基于 JSON 的 GET/POST 请求。
 * 4. **combine_query_datas_with_get_url**：GET 请求参数拼接工具（基于 URLSearchParams）。
 * 5. **get_url_with_query_parameter**：GET 请求参数拼接工具（基于字符串拼接）。
 * 6. **get_Promise_For_Ajax**：将原生 Ajax 封装为 Promise 对象的工具函数。
 * 7. **use_Promise_For_Ajax**：使用 async/await 调用 Ajax Promise 的包装函数。
 * 8. **use_Promise_with_fetch**：现代 Fetch API 的封装，支持 GET/POST，替代传统 Ajax。
 * 9. **acquireDOMsDynamicResultsFromPromise**：将 DOM 事件监听的动态结果封装为 Promise。
 * 10. **setInternalTask**：定时循环任务及强制中止模板。
 */





/**
 * 简单的打印并返回参数的测试函数
 * @param {Array<any>} parameters 任意需要打印并返回的参数,`...parameters`意为不定长参数
 * @returns {Array<any>} 返回传入的参数集合
 */
export function print(...parameters) {
    console.log(...parameters);
    return parameters
}


/**
 * ## 类说明
 * - 这是一个前端 DOM 操作工具类模块。
 * - 封装了原生的 DOM 操作 API，提供了更便捷的获取元素、创建元素、修改元素内容及属性的方法。
 * - 包含以下核心功能：
 * 1. **元素获取**：通过 ID、Class、TagName 获取单个元素或集合。
 * 2. **DOM 创建与挂载**：创建新节点，并将子节点挂载到指定的父节点。
 * 3. **属性与内容修改**：设置属性、插入纯文本、插入 HTML 代码。
 * 4. **包含的核心方法**
 * ---
 * - `getElementById(id)`: 通过 id 获取单个页面元素（返回 HTMLElement | null）。
 * - `getElementsByClass(className)`: 通过 class 属性获取元素集合（返回 HTMLCollection）。
 * - `getElementsByTagName(tagName)`: 通过标签名获取元素集合（返回 HTMLCollection）。
 * - `createElement(tagName)`: 创建指定标签名的新元素。
 * - `addChildNodeToFatherNode(childNode, fatherNode)`: 把子节点添加到父节点。
 * - `setAttributeWithValue(element, attributeName, attributeValue)`: 为元素设置属性及属性值。
 * - `insertTextIntoElements(element, text)`: 把纯文本插入到元素内。
 * - `insertHTMLCodeIntoNode(element, html5Code)`: 把 HTML 代码插入到元素内。
 */
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
    getElementById(id) {
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
    getElementsByClass(className) {
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
    getElementsByTagName(tagName) {
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
    createElement(tagName) {
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
    addChildNodeToFatherNode(childNode, fatherNode) {
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
    setAttributeWithValue(element, attributeName, attributeValue) {
        element.setAttribute(attributeName, attributeValue)
        return element
    }
    /**
     * 把文本插入到元素内
     * @param {HTMLElement} element 目标 DOM 元素
     * @param {string} text 要插入的文本
     * @returns {HTMLElement} 设置好文本的元素
     */
    insertTextIntoElements(element, text) {
        element.innerText = text
        return element
    }
    /**
     * 把 HTML 代码插入到元素内
     * @param {HTMLElement} element 目标 DOM 元素
     * @param {string} html5Code 符合 HTML5 语法的 HTML 语句
     * @returns {HTMLElement} 设置好 HTML 的元素
     */
    insertHTMLCodeIntoNode(element, html5Code) {
        element.innerHTML = html5Code
        return element
    }

    /**
     * ### 方法说明
     * - 通过id获取dom元素,拿到元素内的值
     * @param {string} id dom元素的id
     * @returns {string|number|null|undefined|any} dom元素内的值
     */
    getValueFromElement(id) {
        /**
         * ### 变量说明
         * - 前端元素输入、包含值的元素
         * @type {HTMLElement|HTMLInputElement|HTMLTextAreaElement}
         */
        const element = this.getElementById(id)
        /**
         * #### 变量说明
         * - dom元素内的值
         * @type {string|number|null|undefined|any}
         */
        let value = element.value
        return value
    }
    /**
     * #### 方法说明
     * - 使用`queryselector`精准定位元素，获取符合要求的第一个dom元素
     * @param {string} selector_clause 符合CSS语法的元素选择句
     * @returns {HTMLElement} 通过querySelector获取的第一个dom元素，即使符合条件的有多个，最终有且仅有一个
     */
    getElementWithQuerySelector(selector_clause) {
        /**
         * #### 变量说明
         * - 有且只有一个元素
         *@type  {HTMLElement} 通过querySelector获取的dom元素
         */
        let element = document.querySelector(selector_clause)
        return element
    }

    /**
     * #### 方法说明
     * - 使用`queryselector`精准定位元素，获取符合要求的元素集合
     * @param {string} 符合CSS语法的元素选择句
     * @returns {NodeListOf<HTMLElement>} 通过querySelector获取的dom元素集合
     */
    getElementsWithQuerySelector(selector_clause) {
        /**
         * #### 变量说明
         * - 符合条件的元素集合
         * @type {NodeListOf<HTMLElement>} 通过querySelector获取的dom元素集合
         */
        let elements = document.querySelectorAll(selector_clause)
        return elements
    }

}

export class ManipulatePromise {
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
 * ### 复习ajax用的工具类
 */
export class ReviewAjax {
    /**
     * 类的实例化属性,构造函数`constructor`中会定义，此处提前声明
     * @type {any}
     */
    attribute = undefined
    /**
     * 类的实例化属性,构造函数`constructor`中会定义，此处提前声明
     * @type {any}
     */
    property = undefined
    /**
     * - 类的实例化属性,构造函数`constructor`中会定义，此处提前声明
     * - 后续赋值一个函数作为方法(显示还是`property`)
     * @type {any}
     */
    methods = undefined
    /**
     *  
     * - 构造函数,设置实例化对象的属性和方法
     * - 
     * @param {any} parameter 实例化属性值，建立对象需要外部输入
     * @param {any} argument 实例化属性值，建立对象需要外部输入
     * @returns {any} 构造函数只返回this
     */
    constructor(parameter, argument) {
        this.attribute = parameter; this.property = argument
        this.methods = () => { return undefined }

        return this
    }

    /**
     * ### 工具参数说明
     * - 如果是get请求发起Ajax,需要重新处理get链接，把参数拼接到GET请求的url中
     * @param {string} url ***尚未拼接查询参数***的原始GET请求url
     * @param {Record<string,string>} datas ***用于拼接GET请求url的***查询参数
     * @returns {{"url":string,"parameters":string}} 1. **url**：***已经拼接了查询参数***的GET请求url  
     * 2. **parameters**:***`object`格式的`datas`对象转化为符合Form表单形式的参数***
     */
    combine_GET_Requests_With_Query_Parameters_And_Get_Parameters(url, datas) {
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
        return { "url": get_url, "parameters": parameters.slice(0, parameters.length - 1) }
    }

    /**
     * #### 函数说明
     * - 针对json数据类型,发起get请求
     * @param {string} method 请求方法,默认为`GET`      
     * @param {{"Content-Type": "application/json","Accept": "application/json"}|Record<string,any>} headers 请求头，json数据类型默认请求头如上
     * @param {string} url  `GET`请求的url地址，如果有查询参数，需要把查询参数拼接到默认url尾部
     * @returns {any} 异步函数的回调执行后的返回值不会存储到函数,无法赋值给全局变量,只能在回调函数内部存储和操作网页dom元素
     */
    use_Ajax_For_Get_Request_With_Json(method, headers, url) {
        const xhr = new XMLHttpRequest();
        const headers_keys = Object.keys(headers)
        xhr.open(method, url)
        xhr.setRequestHeader(headers_keys[0], headers[headers_keys[0]])
        xhr.setRequestHeader(headers_keys[1], headers[headers_keys[1]])
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    /**
                     * - 异步函数的回调执行后的返回值不会存储到函数,无法赋值给全局变量,只能在回调函数内部存储和操作网页dom元素
                     * - 只能在异步函数内呈现callback后的结果，本地保存数据、变动网页、操作dom元素
                     * @type {string}
                     */
                    let result = xhr.responseText
                    // 根据实际业务需要，添加业务逻辑代码(操作dom元素、变动网页、传递参数、保存/读取数据等)
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
    use_Ajax_For_Post_Request_With_Json(method, headers, url, datas) {
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
                    /**
                     * - 异步函数的回调执行后的返回值不会存储到函数,无法赋值给全局变量,只能在回调函数内部存储和操作网页dom元素
                     * - 只能在异步函数内呈现callback后的结果，本地保存数据、变动网页、操作dom元素
                     * @type {string}
                     */
                    let result = xhr.responseText
                    // 根据实际业务需要，添加业务逻辑代码(操作dom元素、变动网页、传递参数、保存/读取数据等)
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
}

/**
 * ## 函数作用
 * - 前端发起get请求,把输入的参数进行解析
 * - 将解析结果拼接到get请求的url中作为查询参数
 * @param {string} url 没有查询参数的get请求url,`字符串类型`
 * @param {Record<string,any>} datas get请求输入的参数，`键值对对象类型`
 * @returns {string} 拼接了查询参数的get请求url,`字符串类型`
 */
export function combine_query_datas_with_get_url(url, datas) {
    const parameters = new URLSearchParams(datas).toString();
    console.log(parameters)
    const get_url = `${url}?${parameters}`
    return get_url

}

/**
 * ## 函数作用
 * - 前端发起get请求,把输入的参数进行解析
 * - 将解析结果拼接到get请求的url中作为查询参数
 * @param {string} url 没有查询参数的get请求url,`字符串类型`
 * @param {Record<string,any>} datas get请求输入的参数，`键值对对象类型`
 * @returns {string} 拼接了查询参数的get请求url,`字符串类型`
 */

export function get_url_with_query_parameter(url, datas) {
    /**
     * @type {Array<string>} 参数的key值
     */
    let key_arrays = Object.keys(datas)
    console.log(key_arrays)
    let parameter = ""
    for (let index = 0; index < key_arrays.length; index += 1) {
        parameter = parameter + `${key_arrays[index]}=${datas[key_arrays[index]]}&`

    }
    const query_parameter = parameter.slice(0, parameter.length - 1)
    console.log(query_parameter)
    /**
     * @type {string} 拼接了查询参数的get请求url,`字符串类型`
     */
    let get_url = `${url}?${query_parameter}`

    return get_url
}


export function get_Promise_For_ajax(datas, method, url) {

    const promise = new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        let headers = { "Content-Type": "application/json", "Accept": "application/json" }
        let keys = Object.keys(headers)
        const on_ready_change = () => {
            if (client.readyState === 4) {
                if (client.status === 200) {
                    resolve(`获取结果:\n${client.responseText}\n参数:${JSON.stringify(datas)},参数类型:${typeof (JSON.stringify(datas))}`)
                } else {
                    reject(`状态码:\n${JSON.stringify(client.status)}`)
                }
            } else {
                console.log(`当前响应码:\n${JSON.stringify(client.readyState)}`)
            }
            return arguments
        }
        if (method === "POST") {
            client.open(method, url)
            client.setRequestHeader(keys[0], headers[keys[0]])
            client.setRequestHeader(keys[1], headers[keys[1]])
            client.send(JSON.stringify(datas))
            client.onreadystatechange = on_ready_change
        } else if (method === "GET") {
            console.log('get请求,不用传递参数')
            let get_url = combine_query_datas_with_get_url(url, datas)
            client.open(method, get_url); client.setRequestHeader(keys[0], headers[keys[0]]); client.setRequestHeader(keys[1], headers[keys[1]]);
            client.send()
            client.onreadystatechange = on_ready_change
        } else {
            console.log('非有效请求')
        }
    })
    return promise
}





/**
 * ## 函数说明
 * - async异步函数调用Promise对象
 * @param {Promise<any>} promise Promise对象
 * @returns {Promise<any>} 
 * - 如果符合条件成功触发,返回Promise对象，否则返回报错信息
 * - 如果要获取Promise对象传递的参数,需要对函数进行`await se_Promise_For_Ajax(promise)`的方式调用
 */
export async function use_Promise_For_Ajax(promise) {
    try {
        const result = await promise
        /** 其他业务代码补充在此 */
        console.log(`${result}`)
        return result

    } catch (error) {
        console.log(`${error}`)
        return error
    } finally { console.log(`async异步函数调用Promise程序结束`) }
}


/**
 * #### 函数说明
 * - 使用`async`异步函数搭配`await`调用`fetch`，替代手写`Promise`和`ajax`
 * @param {Record<string,string>} data 传入的参数：
 * - `POST`请求中是需要发送的`body`；
 * - `GET`请求中的查询参数，组合到get请求对应的url
 * @param {Record<string,string>} headers ***请求头***：
* - **JSON 格式参数（常用）**：
 *   完整的 POST 请求头应为：
 *   `{ "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer my_api_key", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..." }`
 * ---
 * - **Form 表单格式参数**：
 *   完整的 POST 请求头应为：
 *   `{ "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json", "Authorization": "Bearer my_api_key", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..." }`
 * - `GET`请求中不能有`Content-Type`，通常没有`Authorization`
 * - `POST`请求中，有时候需要添加**api_key**：`Authorization`，必须有`Content-Type`
 * - 不论是哪种请求，`User-Agent`都不是必须，手动添加`User-Agent`后，有些浏览器不兼容,会报错
 * @param {string} method  请求方法：`GET`、`POST`、`PUT`、`DELETE` 
 * > **注意**：建议统一使用***大写***
 * @param {string} url 请求地址：不同方法对应的请求地址都不一样，`GET`请求如果有参数，会作为***查询参数***添加到GET请求地址尾部
 * @returns {Promise<any>} 返回的是`Promise`对象
 * - 需要用`await`调用Promise对象传递来的数据
 * - 或者用`Promise`对象传统观点链式调用
 */
export async function use_Promise_with_fetch(data, headers, method, url) {
    let options = undefined
    method == "POST" ? options = { "body": JSON.stringify(data), "headers": headers, "method": method } : options = { "headers": headers, "method": method }
    if (method == "POST") {
        const response = await fetch(url, options)
        /**
         * ### 返回值说明
         * 返回的是`Promise`对象
         * * - 需要用`await`调用Promise对象传递来的数据
         * * - 或者用`Promise`对象传统观点链式调用
         * @type {Promise<any>}
         */
        const result = await response.json()
        return result
    } else {
        const query_parameter = new URLSearchParams(data)
        const parameters = query_parameter.toString()
        const get_url = `${url}?${parameters}`
        const response = await fetch(get_url, options)
        /**
         * ### 返回值说明
         * 返回的是`Promise`对象
         * * - 需要用`await`调用Promise对象传递来的数据
         * * - 或者用`Promise`对象传统观点链式调用
         * @type {Promise<any>}
         */
        const result = await response.json()
        return result
    }
}



/**
 * ### 函数说明
 * - 测试函数
 * - 监听元素事件并获取结果
 * @param {HTMLElement|HTMLInputElement|HTMLTextAreaElement} element dom元素
 * @param {string} the_event 事件名称,如`click`
 * @returns {Record<string,any>} 监听事件的结果
 */

/**
 * #### 异步函数说明
 * - 对目标dom元素进行事件监听，获取动态加载的结果,并封装在Promise内，进行异步调用
 * > ***备注***：解决回调函数的结果无法在异步机制中直接赋值给外部变量的问题
 * @param {HTMLElement} element_target 需要监听的dom元素，例如`type=submit`的`form`表单`input`元素等
 * @param {HTMLInputElement|HTMLTextAreaElement} element 能输入信息的DOM元素，比如`form`表单的`input`或者文本框`textarea`等
 * @param {string} event_type 事件类型,比如`click`、`input`等
 * @returns {Promise<string|number|boolean|any>} 获取动态加载的结果,封装在Proimise对象内，需要用await调用
 */
export async function acquireDOMsDynamicResultsFromPromise(element_target, element, event_type) {
    try {
        const promise = new Promise((resolve, reject) => {
            element_target.addEventListener(event_type, (event) => {
                event.preventDefault()
                console.log(`事件监听的对象:${event.target}`)
                console.log(`监听的事件类型:${event.type}`)
                console.log(`事件监听的对象的id:${event.target.id}`)
                console.log(`事件监听的对象的值:${event.target.value}`)
                if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                    const result = element.value
                    resolve(`${result}`)
                } else { reject(`报错!!!该元素无动态加载的值`) } return arguments
            })
        })
        return promise
    } catch (error) {
        console.error(`报错信息`, `${error}`)
        return error
    }
}

/**
 * #### 函数说明
 * - `async`函数搭配`await`调用封装好的Promise对象，并返回Promise传递来的数据
 * @param {Promise<any>} promise `async`函数或者手动生成的Promise对象
 * @returns {any} Promise传递来的数据，或者报错信息
 */
async function usePromise(promise) {
    try {
        /**
         * #### 变量说明
         * - `await`调用Promise对象,返回Promise对象传递的数据
         * @type {any}
         */
        let results = await promise
        print(`其他业务代码(操作dom元素、网络请求等)`)
        print(`结果：${results}`)
        return promise
    } catch (error) {
        print(`报错信息：${error}`)
        return error
    }
}

/**
 * #### 函数说明
 * - 简单的间隔循环任务函数模板
 * @param {number} internal_time 间隔循环任务的间隔时间，单位为毫秒
 * @param {number} delay_time 间隔循环任务的结束时间，单位为毫秒
 * @returns {IArguments} 传入的间隔时间和延迟时间
 */
export function setInternalTask(internal_time, delay_time) {
    let intervalTask = setInterval(() => {
        print(`不定时循环任务开启`, `间隔时长：${internal_time}秒`)
        // 此处补充其他业务逻辑代码
        return null
    }, internal_time);

    setTimeout(() => {
        clearInterval(intervalTask)
        print(`${delay_time}秒后,停止间隔循环任务!`)
        // 此处补充其他业务逻辑代码
        return null
    }, delay_time);
    return arguments
}

/**
 * #### 函数说明
 * - 基础防抖工具，防抖一定是基于事件设置的
 * @param {HTMLInputElement|HTMLTextAreaElement|HTMLElement} element #### 防抖元素类型：
 * - 主要为`输入框`或者`文本框`元素，需要限制前端输入动作引发连续请求的情况
 * - 页面scroll滚动事件也是防抖高频场景
 * - 窗口resize也是防抖高频场景
 * @param {number} delay_time 防抖机制下，需要最终延迟触发的时间，单位为毫秒
 * @param {string} event_type 防抖机制的场景：几个 ***会频繁向服务器频繁请求的典抖动事件***
 * - 文本框或者输入框：`input`事件
 * - 拖动页面滚轴：`scroll`事件
 * - 窗口大小重新定义：`resize`事件
 * @returns {undefined} 暂无返回结果，后续根据业务情况更新，待定
 */
export function simpleDebounce(element, event_type, delay_time) {
    let timer = null
    element.addEventListener(event_type, (event) => {
        event.preventDefault()
        if (timer != null && timer != undefined) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            /**
             * 防抖机制的定时任务内，设置实际的业务代码
             */
            print(`启动定时任务!!!!!!!`)
            print(`事件类型：${event.type}`)
            print(`事件对象：${event.target}`)
            print(`事件对象的值：${event.target.value}`)
            print(`事件对象的id：${event.target.id}`)
            return undefined

        }, delay_time);
        return undefined
    })
}


/**
 * ### 函数说明
 * - 基础的`节流`事件工具
 * > **节流** ：按照既定的节奏响应，避免延迟造成的不良体验
 * >
 * > 非万能模板也不是显性的闭包函数构造
 * > 
 * > 仅用于理解节流原理
 * @param {HTMLElement} element_target 事件监听的元素，可以用于节流
 * @param {HTMLInputElement|HTMLTextAreaElement} element form表单中input或者textarea等显示输入信息的元素
 * >此处仅用于测试节流效果
 * >
 * >实际业务代码可调整
 * @param {string} event_type 涉及节流的事件类型
 * @param {number} delay_time 节流的延迟时间,单位为毫秒
 * @returns {undefined} 暂未设定返回值，后续待定
 */
export function simpleThrottle(element_target, element, event_type, delay_time) {
    let last_time = 0
    element_target.addEventListener(event_type, (event) => {
        const now = Date.now()
        event.preventDefault()
        if (now - last_time > delay_time) {
            // 业务代码写在此
            print(`事件类型:${event.type}`)
            print(`事件对象:${event.target}`)
            print(`事件对象的值:${event.target.value}`)
            print(`事件对象的id:${event.target.id}`)
            print(`显示测试结果：${element.value}`)
            // 👇 【极其重要】只有执行了业务代码，才刷新 calm down时间
            last_time = now
        }
        return undefined
    })
    return undefined
}

export default usePromise




















