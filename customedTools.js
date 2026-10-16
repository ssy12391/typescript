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

// 测试样例
const tasks = new MainpulatePromise("对象", "实例化");
const promise = tasks.generatePromise(1+1==3,"yes","no!")
/**
 * 内部 await 拆的是"传进来的那个 promise"。  
 * 外部 await 拆的是"async 函数返回的那个 promise"。
 * @type {Promise<any>}
 */
let result=tasks.usePromise(promise)
console.log(`当前结果：${result}`)
console.log(`当前结果：${await result}`)
