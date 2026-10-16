/**
 * #### 类说明
 * - 操作dom元素的工具类
 */
export class ManipulateDOMs {
    classAttribute = undefined
    classProperty = undefined
    attribute = undefined
    method = undefined
    constructor(parameters) {
        this.attribute = parameters
        this.method = function 实例对象的方法(parameters) {
            console.log(`返回结果：${parameters}`)
            return parameters
        }
    }
    getElementById = (id) => {
        try {
            let element = document.getElementById(id);
            return element
        } catch (error) {
            console.log(`报错信息：${error}`)
            return undefined
        }
    }
    getElementsByClass = function 通过class属性获取元素(className) {
        const elements = document.getElementsByClassName(className)
        return elements
    }
    getElementsByTagName = function 根据元素名称获取元素(tagName) {
        const elements = document.getElementsByTagName(tagName)
        return elements
    }
    createElement = function 建立元素(tagName) {
        const element = document.createElement(tagName)
        return element
    }

    /**
     * 
     * @param {HTMLElement} childNode 子元素node
     * @param {HTMLElement} fatherNode 父元素node
     * @returns {HTMLCollectionOf<HTMLElement>} 父元素和子元素node的集合
     */
    addChildNodeToFatherNode = function 把dom子节点添加到dom父节点(childNode, fatherNode) {
        fatherNode.appendChild(childNode)
        const nodesArray = [childNode, fatherNode]
        return nodesArray
    }

    /**
     * 
     * @param {HTMLElement} element 有效的dom元素,符合html5语法
     * @param {string} attributeName 符合html5语法的dom元素属性名称
     * @param {string|number|any} attributeValue 属性值
     * @returns {HTMLElement} 设置了属性和属性值的dom元素
     */
    setAttributeWithValue = function 建立dom元素的属性并赋值(element, attributeName, attributeValue) {
        element.setAttribute(attributeName, attributeValue)
        return element
    }
    /**
     * 
     * @param {HTMLElement} element 需要插入文本的dom元素
     * @param {string} text 插入dom元素的文本
     * @returns {HTMLElement} dom元素
     */
    inserTextIntoElements = function 把字符串文本插入到元素内(element, text) {
        element.innerText = text
        return element

    }








}


/**测试样例 */


const tasks = new ManipulateDOMs(`review`);

const fathernodes = tasks.getElementsByTagName("div")
const fatherNode = fathernodes[0]
const childnode = tasks.createElement("div")

const elementsArray = tasks.addChildNodeToFatherNode(childnode, fatherNode)
console.log(elementsArray)
tasks.setAttributeWithValue(childnode, "id", "div-child")
tasks.setAttributeWithValue(childnode, "class", "divisions")


