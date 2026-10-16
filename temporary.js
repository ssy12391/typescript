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

}


/**测试样例 */


const Tasks = new ManipulateDOMs(`review`);

const elements = Tasks.getElementsByClass("paragraphs")
export const elementsArray = []

for (let index = 0; index < elements.length; index += 1) {
    const each = elements[index];
    console.log(`${each}：\n${each.tagName}、${each.id}、${each.className}`)
    elementsArray.push(each)
}
console.log(elements, typeof (elements))
console.log(elementsArray, "\n", typeof (elementsArray))