// 自定义工具箱
/**
 * 操作dom元素的类,建立实例化对象后,可以用实例方法操作dom元素
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

    addChildNodeToFatherNode = function 把dom子节点添加到dom父节点(childNode, fatherNode) {
        fatherNode.appendChild(childNode)
        const nodesArray = [childNode, fatherNode]
        return nodesArray
    }

    setAttributeWithValue = function 建立dom元素的属性并赋值(element, attributeName, attributeValue) {
        element.setAttribute(attributeName, attributeValue)
        return element
    }

    insertTextIntoElements = function 把字符串文本插入到元素内(element, text) {
        element.innerText = text
        return element

    }

    inertHTMLCodeIntoNode = (element, html5Code) => {
        element.innerHTML = html5Code
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
tasks.inserttTextIntoElements(childnode, "子区域的div")

tasks.insertTextIntoElements(fatherNode, "<h1>大标题</h1>")