// 复习ts
/**
 * 自定义工具类
 */
class MyTools {

    attribute: any
    property: any
    method0: Function
    constructor(parameters: any, argument: any) {
        this.attribute = parameters
        this.property = argument
        this.method0 = (parameter: any, argument: any) => { console.log(`${parameter}、${argument}`); return [parameters, argument] }
    }
    method1() {console.log(`实例方法1`);return undefined }
    method2() {console.log(`实例方法2`);return undefined }
}

 const myobject = new MyTools(1,2);

myobject.method0(1,2)

export default MyTools