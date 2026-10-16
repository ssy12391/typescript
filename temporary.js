// 复习ts
/**
 * 自定义工具类
 */
class MyTools {
    constructor(parameters, argument) {
        this.attribute = parameters
        this.property = argument
        this.method0 = (parameter, argument) => { console.log(`${parameter}、${argument}`); return [parameters, argument] }
    }
    method1() { console.log(`实例方法1`); return undefined }
    method2() { console.log(`实例方法2`); return undefined }
    method3 = function method3(parameter) {
    console.log(`${parameter}`); return parameter
}
}

const myobject = new MyTools(1, 2);

myobject.method0(1, 2)
myobject.method3(`多么艰难`)
export default MyTools