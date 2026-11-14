// 复习ts

/**
 * 自定义工具类
 */
export class ManipulateDOMs {
    attribute: any
    method: Function
    constructor(parameters: any) {
        this.attribute = parameters
        this.method = function name(parameters: any) {

            console.log(`返回结果：${parameters}`)
            return parameters
        }
    }
    getElementById(id: string): HTMLElement | null {
        let element: HTMLElement | null = document.getElementById(id);
        return element
    }
}


const mytask = new ManipulateDOMs(1);
const div:HTMLElement|null = mytask.getElementById(`div`)
console.log(div)


