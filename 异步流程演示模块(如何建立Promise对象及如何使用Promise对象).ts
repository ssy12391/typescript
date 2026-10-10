/**
 * 异步流程演示模块(如何建立Promise对象及如何使用Promise对象)
 *
 * 本模块用于演示 TypeScript 中 Promise 的创建、异步函数的封装方式，
 * 以及 async/await 与 then/catch/finally 的组合使用方式。
 *
 * 功能点：
 * 1. getPromise(condition): 根据布尔条件返回一个 Promise，
 *    resolve / reject 分别模拟成功与失败的异步结果。
 *
 * 2. usePromise(parameter): 使用 async/await 调用 getPromise，
 *    并通过 try/catch 捕获异常，返回最终结果。
 *
 * 3. 外部通过 then/catch/finally 对 usePromise 的返回值进行链式处理，
 *    展示 Promise 在调用层的标准用法。
 *
 * 适用场景：
 * - 学习 Promise 的状态流转
 * - 学习 async/await 的错误处理机制
 * - 学习异步函数返回 Promise 后的链式调用方式
 */
// 建立Promise对象，通常包裹在函数内,便于传递条件参数
function getPromise(condition: boolean) {
    const promise = new Promise<string | number | boolean>((resolve, reject) => {
        if (condition == true) {
            resolve(`succeed!`)
        } else {
            reject(`failed!!!`)
        }
    })
    return promise

}

// ES6语法，用异步函数使用Promise对象
async function usePromise(parameter: boolean): Promise<any> {
    try {
        const result: any = await getPromise(parameter)

        console.log(`使用async异步函数，获取promise结果：\t${result}`)
        return result

    } catch (error) {
        console.log(`报错信息：${error}`)
        return error
    }
    return parameter
}
// ES6语法，用异步函数使用Promise对象
let result: Promise<any> = usePromise(true)


// 传统的链式调用Promise对象获得结果
result.then((result) => { console.log(`使用Promise传统链式调用,拿到Promise的结果：${result}`); return result }).catch((error) => { console.log(`报错信息：${error}`); return error }).finally(() => { console.log("Promise传统链式调用的finally中回调函数结果：程序结束"); return undefined })