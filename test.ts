import axios from "axios";
import { print } from "./baseCustomedTools.js";
let url: string = "http://httpbin.org/get"
let parameters: Record<string, string | number | any> = { "username": "simon", "age": 36 }
url = `${url}?${new URLSearchParams(parameters).toString()}`
let headers: { headers: { "Content-Type": string, "Accept": string, "Authorization": string } } = {
    headers: {
        "Content-Type": "application/json", "Accept": "application/json",
        "Authorization": "Bearer 2314798357"
    }
}
export async function use_axios_for_get_requests(url: string, headers: {
    headers: {
        "Content-Type": string, "Accept": string,
        "Authorization": string,
    }
}): Promise<any> {
    let response = await axios.get(url, headers)
    let result = response.data
    print(result)
    return result
}
// use_axios_for_get_requests(url, headers)
url = "http://httpbin.org/post"
export async function use_axios_for_post_requests(url: string,
    headers: { headers: { "Content-Type": string, "Accept": string } },
    datas: Record<string, any>): Promise<any> {
    let body: string = JSON.stringify(datas)
    let response = await axios.post(url, body, headers)
    let result = response.data
    print(result)
    return result
}
let result=await use_axios_for_post_requests(url, headers, parameters)
print(result)