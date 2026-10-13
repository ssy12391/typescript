// 复习ts
const url:string="https://www.baidu.com"
let content: Promise<Response> = fetch(url)
content.then((response) => { console.log(`fetch结果：${response.text()}`); return response }).then((text)=>{console.log(`返回结果：\n${text}`);return text}).catch((error) => { console.log(`报错信息：${error}`); return error }).finally(() => { console.log("测试结束"); return undefined })

