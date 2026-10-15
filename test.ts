// 复习ts

const url: string = "https://www.baidu.com"

/**
 * 这是一个获取 Promise 的函数
 * @param parameter 判断条件，决定是 resolve 还是 reject
 * @returns 返回的 promise 对象，可以在符合条件的情况下激活，根据条件传递参数
 */
function getPromise(
    /** 参数，必须是逻辑类型，返回值是true或者false*/
    parameter: boolean
): Promise<string | number | Array<any>> {

    /** 返回的promise对象，可以在符合条件的情况下激活，根据条件传递参数*/
    const promise = new Promise<string | number | Array<any>>((resolve, reject) => {
        if (parameter == true) {
            resolve(`suceeed!`)
        } else {
            reject(`failed!!`)
        }
    }); return promise
}

let promise: Promise<any> = getPromise(false)


let content: Promise<Response> = fetch(url)
content.then((response) => { console.log(`fetch结果：${response.text()}`); return response }).then((text) => { console.log(`返回结果：\n${text}`); return text }).catch((error) => { console.log(`报错信息：${error}`); return error }).finally(() => { console.log("测试结束"); return undefined })

