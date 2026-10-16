// 复习ts

const url: string = "https://www.baidu.com"
/**
 * 
 * @param parameter 条件参数,必须是逻辑true或者false类型
 * @returns 返回promise对象
 */
function getPromise(
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
/**
 * - 通过 ***函数`getPromise`*** 生成的 ***`promise对象`***
 */
let promise: Promise<any> = getPromise(false)
promise.then((result) => { console.log(`promise的传统调用方式,符合条件：${result}`); return result }).catch((error) => { console.log(`promise的传统调用方式,不符合条件：${error}`) }).finally(() => { console.log(`promise的传统调用方,程序结束!`); return undefined })
/**
 * 
 * @param promise 参数类型是promise
 * @returns 如果符合条件，返回resolve函数传递的对象，否则返回reject函数中传递的对象
 */
async function usePromise(promise: Promise<any>): Promise<any> {
    try {
        /** 返回resolve函数传递的对象*/
        let result = await promise
        console.log(`async调用promise,符合条件${result}`)
        return result
    } catch (error) { /** 返回reject函数中传递的对象*/
          console.log(`async调用promise，不符合条件：${error}`);
        return error; // 让调用者知道出错了
    }

}

usePromise(promise)