/**
 * @file customedTools.js
 * @module customedTools
 * @description 
 * 这是一个综合性的前端工具库，主要包含以下核心模块：
 * 1. **ManipulateDOMs**：DOM 操作类，封装了获取元素、创建元素、添加子节点、设置属性等常用方法。
 * 2. **MainpulatePromise**：Promise 工具类，提供自定义触发时机的 Promise 生成，以及 async/await 调用封装。
 * 3. **ReviewAjax**：原生 Ajax 封装类，使用 XMLHttpRequest 实现 GET/POST 请求。
 * 4. **combine_query_datas_with_get_url / get_url_with_query_parameter**：GET 请求参数拼接工具函数。
 * 5. **get_Promise_For_Ajax**：将原生 Ajax 封装为 Promise 对象的工具函数。
 * 6. **use_Promise_For_Ajax**：使用 async/await 优雅调用 Promise 的包装函数。
 * 7. **use_Promise_with_fetch**：现代 Fetch API 的封装，支持 GET/POST，替代传统的 Ajax。
 */

/**
 * 简单的打印并返回参数的测试函数
 * @param {any} parameter 任意需要打印并返回的参数
 * @returns {any} 返回传入的参数本身
 */
function print(parameter) {
    console.log(parameter);return parameter
}

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



// let result_get = await use_Promise_with_fetch({ "username": "simon", "password": "12344" }, { "Accept": "application/json", "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36 Edg/157.0.0.0' }, "GET", "http://httpbin.org/get",)
// let result_post = await use_Promise_with_fetch({ "username": "simon", "password": "12344" }, {
//     "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer my_api_key", "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36 Edg/157.0.0.0',
// }

//     , "POST", "http://httpbin.org/post",)
// console.log(result_get)
// console.log(result_post)

// let result_get = use_Promise_with_fetch({ "username": "simon", "password": "12344" }, { "Accept": "application/json" }, "GET", "http://httpbin.org/get",)
// let result_post = use_Promise_with_fetch({ "username": "simon", "password": "12344" }, { "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer my_api_key", "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36 Edg/157.0.0.0', }, "POST", "http://httpbin.org/post",)

// result_get.then((result) => { console.log(`get请求结果：${JSON.stringify(result)}`); return result }).catch((error) => { console.log(error); return error })
// result_post.then((result) => { console.log(`post请求结果：${JSON.stringify(result)}`); return result }).catch((error) => { console.log(error); return error })

// export default {  print}
// print("今天任务结束啦")