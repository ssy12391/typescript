
import { print, ManipulateDOMs } from "./baseCustomedTools.js";
/** 
 * ## 类说明
 * - 集成多项工具用于创建特定的dom元素
 */
export class ManipulateDOMsForCreatingSomeFrequentUsedElements {
    /**
        * ## 函数说明
        * - 类的构造函数，用于初始化实例属性。
        * * 执行流程：
         * 1. 获取传入参数的数量并赋值给 `this.number`。
         * 1. 获取传入的第一个参数并赋值给 `this.attribute`。
        * ### 参数说明
        * @param  {...any} parameters - 不定长参数列表。
        * * 第一个参数会被存入 `this.attribute`。
        * ### 返回值说明
        * @returns {void} 构造函数不返回内容，自动返回实例对象。
        */
    constructor(...parameters) {
        this.number = parameters.length
        this.attribute = parameters[0]
    }
    /**
     * ## 方法说明
     * - 动态创建一个用于切换页面背景色的按钮控件。
     * - 执行流程：
        * 1. 实例化 DOM 工具类并获取 `<body>` 元素。
        * 2. 创建一个 `<button>` 元素，并在 `DOMContentLoaded` 事件触发后绑定 `click` 事件。
        * 3. 点击时，通过 `classList.toggle` 切换指定的 CSS 类名。
        * 4. 根据当前 `body` 是否包含该类名，动态切换按钮上的文字显示。
        * 5. 根据 `whether_automatic_loading` 参数，决定是否将按钮直接追加到页面的 `<body>` 中。
     * ### 参数说明
     * @param {string} className_for_css_style - 需要切换的 CSS 类名
     * - 该类名需在对应的 CSS 文件中提前定义好样式。
     * > **example**
     * >
     * > 调用函数后，参数`className_for_css_style`的值设置为"dark-mode"
     * >
     * > CSS文件中，必须同步用`dark-mode`作为selector的选择器，然后设置字体和背景样式
     * >```css
     * >.dark-mode {color: white;background-color: black;}
     * >```
     * @param {string} shallowName - 浅色模式（或默认模式）下，按钮上显示的文字（如："日间模式"）。
     * @param {string} darkName - 深色模式下，按钮上显示的文字（如："夜间模式"）。
     * @param {boolean} whether_automatic_loading - 是否自动装载。
     * - 传 `true` 则自动将按钮挂载到 `body` 尾部；
     * - 传 `false` 则仅返回按钮元素，由外部手动挂载。
     * ### 返回值说明
     * @returns {HTMLButtonElement} 返回创建好的DOM 元素对象——`button`。
     */
    buttonDesignedForChangingBackgroundColour(className_for_css_style, shallowName, darkName, whether_automatic_loading) {
        const my_tasks = new ManipulateDOMs(`添加一个更改页面背景颜色的按钮控件`);
        let bodys = my_tasks.getElementsWithQuerySelector("body")
        let body = bodys[0]
        let button = my_tasks.createElement("button")
        document.addEventListener("DOMContentLoaded", (event) => {
            button.innerText = shallowName
            button.addEventListener("click", (event) => {
                body.classList.toggle(className_for_css_style)
                if (
                    body.classList.contains(className_for_css_style)) {
                    button.innerText = darkName
                } else { button.innerText = shallowName }; return event;
            }); return event
        })
        if (whether_automatic_loading === true) {
            my_tasks.addChildNodeToFatherNode(button, body)
        } else {
            print(`未设置自动装载`)
        }
        return button
    }
    /**
     * ## 方法说明
     * - 动态创建一个完整的 `<form>` 表单元素，包含指定的输入框 `<input>` 与标签 `<label>`。
     * - 执行流程：
     *   1. 实例化 `ManipulateDOMs` 工具类。
     *   2. 创建 `<form>` 元素，并设置 `action`、`method`、`id`、`class`、`name` 属性。
     *   3. 遍历 `inputs_types` 对象的键（即输入框的 `name`）。
     *   4. 为每个键创建 `<input>` 元素，并绑定对应的 `id`、`type`、`class`。
     *   5. 为每个键创建 `<label>` 元素，设置 `for` 属性关联对应的 `input` 的 `id`，并将键名作为文本插入。
     *   6. 将 `<input>` 挂载到 `<label>` 内部，再将 `<label>` 挂载到 `<form>` 内部。
     *   7. 将生成的元素收集到数组中并返回。
     * ### 参数说明
     * @param {string} [action="./"] - 表单提交的目标 URL。
     * @param {string} [form_id="form-account"] - 表单的 `id` 属性值。
     * @param {string} [form_class="forms"] - 表单的 `class` 属性值。
     * @param {string} [form_method="post"] - 表单的提交方式（`get` 或 `post`）。
     * @param {string} [form_name="form-account"] - 表单的 `name` 属性值。
     * @param {Record<string, string>} [inputs_types={"username":"text", "password":"password", "url":"url", "date":"date", "email":"email", "submit":"submit"}] 
     * - 键值对对象。键为输入框的 `name` 和 `id` 后缀，值为 `input` 的 `type` 属性（如 `text`, `password` 等）。
     * @param {string} [inputs_class="inputs"] - 所有生成的 `<input>` 元素的 `class` 属性值。
     * ### 返回值说明：
     * @returns {{ form: HTMLFormElement, inputs: Array<HTMLInputElement>, labels:Array<HTMLLabelElement>}}
     * - 返回一个对象
     * - `form`：创建好的表单根节点。
     * > `form`也是对象的`key`，调用 **创建好的表单根节点-form元素**
     * - `inputs`：表单内所有 `input` 元素组成的数组。
     * >  `inputs`也是对象的`key`，调用 **表单内所有 `input` 元素组成的数组。**
     * - `labels`：表单内所有 `label` 元素组成的数组。
     * > `labels`也是对象的`key`，调用 **表单内所有 `label` 元素组成的数组。**
     */
    createFormElement(action = "./", form_id = "form-account",
        form_class = "forms", form_method = "post",
        form_name = "form-account",
        inputs_types = {
            "username": "text", "password": "password", "url": "url", "date": "date", "email": "email",
            "submit": "submit"
        }, inputs_class = "inputs"
    ) {
        const my_tasks = new ManipulateDOMs(`建立一个form表单元素`, `主要用于账户信息输入`, `默认方法为"post"`);
        let form = my_tasks.createElement("form")
        my_tasks.setAttributeWithValue(form, "action", action)
        my_tasks.setAttributeWithValue(form, "method", form_method)
        my_tasks.setAttributeWithValue(form, "id", form_id)
        my_tasks.setAttributeWithValue(form, "class", form_class)
        my_tasks.setAttributeWithValue(form, "name", form_name)
        const inputs_names = Object.keys(inputs_types)
        let inputs = []; let labels = []
        print(inputs_names)
        for (let index = 0; index < inputs_names.length; index = index + 1) {
            let input = my_tasks.createElement("input")
            my_tasks.setAttributeWithValue(input, "name", inputs_names[index])
            my_tasks.setAttributeWithValue(input, "id", `input-${inputs_names[index]}`)
            my_tasks.setAttributeWithValue(input, "type", inputs_types[inputs_names[index]])
            my_tasks.setAttributeWithValue(input, "class", inputs_class)
            // 📋 附赠：最常用的合法 autocomplete 速查表
            // 以后写表单，认准这些标准值，浏览器就能自动帮你填充：
            // 场景	标准值 (autocomplete=)	说明
            // 用户名	username	登录时的账号/用户名。
            // 当前密码	current-password	登录时的密码（浏览器会提示自动填充保存过的密码）。
            // 新密码	new-password	注册或修改密码时使用（浏览器会提示生成强密码）。
            // 电子邮箱	email	自动填充邮箱地址。
            // 手机号	tel	自动填充电话号码。
            // 全名/姓名	name	自动填充姓名。
            // 名字/姓氏	given-name / family-name	分别是名和姓。
            // 关闭自动填充	off	告诉浏览器：别自作多情，我不需要你填。
            if (inputs_names[index] === "password") {
                my_tasks.setAttributeWithValue(input, "autocomplete", `current-password`)
            }
            else if (inputs_names[index] !== "submit") { my_tasks.setAttributeWithValue(input, "autocomplete", `${inputs_names[index]}`) }
            else { print(`无需设置autocomplete属性`) }
            let label = my_tasks.createElement('label')
            my_tasks.setAttributeWithValue(label, "id", `label-${inputs_names[index]}`)
            my_tasks.setAttributeWithValue(label, "class", `labels-account`)
            my_tasks.setAttributeWithValue(label, "for", `input-${inputs_names[index]}`)
            my_tasks.insertTextIntoElements(label, inputs_names[index])
            my_tasks.addChildNodeToFatherNode(input, label)
            my_tasks.addChildNodeToFatherNode(label, form)
            inputs.push(input); labels.push(label)
        }
        /**
          * #### 返回值说明：
          * @type {{ form: HTMLFormElement, inputs: Array<HTMLInputElement>, labels:Array<HTMLLabelElement>}}
          * - 返回一个对象
          * - `form`：创建好的表单根节点。
          * > `form`也是对象的`key`，调用 **创建好的表单根节点-form元素**
          * - `inputs`：表单内所有 `input` 元素组成的数组。
          * >  `inputs`也是对象的`key`，调用 **表单内所有 `input` 元素组成的数组。**
          * - `labels`：表单内所有 `label` 元素组成的数组。
          * > `labels`也是对象的`key`，调用 **表单内所有 `label` 元素组成的数组。**
         */
        const returns = { "form": form, "inputs": inputs, "labels": labels }
        return returns
    }
    /**
     * ## 方法说明
     * 动态创建一个包含指定数量 `<textarea>` 元素的 `<form>` 表单。
     * ### 执行流程：
      * 1. 实例化 DOM 工具类。
      * 1. 创建 `<form>` 元素，并遍历 `formOptions` 设置其各项基础属性。
      * 1. 根据 `number_of_textareas` 参数进入循环。
      * 1. 在每次循环中，创建 `<label>` 与 `<textarea>` 元素。
      * 1. 为 `<label>` 设置 `for` 属性绑定对应的 `<textarea>` 的 `id`，并插入文本内容。
      * 1. 为 `<textarea>` 设置 `id`、`name`、`class` 属性。
      * 1. 将 `<textarea>` 挂载到 `<label>` 内部，再将 `<label>` 挂载到 `<form>` 内部。
      * 1. 若发生异常，捕获并打印报错信息。
     * ### 参数说明
     * @param {number} number_of_textareas - 需要生成的文本框（textarea）数量
     * * 默认值为 1。
     * @param {string} label_name_of_textarea - 每个 `<label>` 元素的文本前缀
     * * 默认值为 "输入框"。最终生成的文本格式为 "输入框-0"、"输入框-1"。
     * @param {Record<string, string>} formOptions - 表单容器的属性配置对象
     * * 包含 id, class, name, method, action。
     * > **example**
     * >
     * > 参数 `formOptions` 的默认值设置为：
     * >
     * >```javascript
     * >{"id": "form-textarea", "class": "forms-textareas", "name": "form-textarea", "method": "post", "action": "./"}
     * >```
     * @param {Record<string, string>} textareaOptions - 文本框元素的属性配置对象
     * * 包含 id, class, name。注意：实际生成的 `id` 会拼接循环索引以保持唯一性。
     * > **example**
     * >
     * > 参数 `textareaOptions` 的默认值设置为：
     * >
     * >```javascript
     * >{id: "textarea-form", class: "textareas-form", name: "textarea-form"}
     * >```
     * ### 返回值说明
     * @returns {HTMLFormElement} 返回创建好的 DOM 元素对象——`form`
     */
    createTextareasInFormElement(number_of_textareas = 1, label_name_of_textarea = "输入框"
        , formOptions = {
            "id": "form-textarea",
            "class": "forms-textareas",
            "name": "form-textarea",
            "method": "post",
            "action": "./"
        }, textareaOptions = { id: "textarea-form", class: "textareas-form", name: "textarea-form", }
    ) {
        const my_tasks = new ManipulateDOMs(`创建若干文本框`, `文本框在Form表单内`, `最终以Form表单包裹textarea的形式呈现`);
        let form = my_tasks.createElement("form")
        let keys = Object.keys(formOptions)
        let values = Object.values(formOptions)
        for (let index = 0; index < keys.length; index++) {
            my_tasks.setAttributeWithValue(form, keys[index], values[index])
        }
        try {
            for (let index = 0; index < number_of_textareas; index += 1) {
                let label = my_tasks.createElement('label')
                let textarea = my_tasks.createElement('textarea')
                my_tasks.setAttributeWithValue(label, "for", `${textareaOptions.id}-${index}`)
                my_tasks.setAttributeWithValue(textarea, "id", `${textareaOptions.id}-${index}`)
                my_tasks.setAttributeWithValue(textarea, "name", textareaOptions.name)
                my_tasks.setAttributeWithValue(textarea, "class", textareaOptions.class)
                my_tasks.insertTextIntoElements(label, `${label_name_of_textarea}-${index}`)
                my_tasks.addChildNodeToFatherNode(textarea, label)
                my_tasks.addChildNodeToFatherNode(label, form)
            }
        } catch (error) {
            print(`报错信息：\n${error}`)
        }
        return form
    }
}
/**
 * ## 函数说明
 * - 动态创建一个用于切换页面背景色的按钮控件。
 * - 执行流程：
    * 1. 实例化 DOM 工具类并获取 `<body>` 元素。
    * 2. 创建一个 `<button>` 元素，并在 `DOMContentLoaded` 事件触发后绑定 `click` 事件。
    * 3. 点击时，通过 `classList.toggle` 切换指定的 CSS 类名。
    * 4. 根据当前 `body` 是否包含该类名，动态切换按钮上的文字显示。
    * 5. 根据 `whether_automatic_loading` 参数，决定是否将按钮直接追加到页面的 `<body>` 中。
 * ### 参数说明
 * @param {string} className_for_css_style - 需要切换的 CSS 类名
 * - 该类名需在对应的 CSS 文件中提前定义好样式。
 * > **example**
 * >
 * > 调用函数后，参数`className_for_css_style`的值设置为"dark-mode"
 * >
 * > CSS文件中，必须同步用`dark-mode`作为selector的选择器，然后设置字体和背景样式
 * >```css
 * >.dark-mode {color: white;background-color: black;}
 * >```
 * @param {string} shallowName - 浅色模式（或默认模式）下，按钮上显示的文字（如："日间模式"）。
 * @param {string} darkName - 深色模式下，按钮上显示的文字（如："夜间模式"）。
 * @param {boolean} whether_automatic_loading - 是否自动装载。
 * - 传 `true` 则自动将按钮挂载到 `body` 尾部；
 * - 传 `false` 则仅返回按钮元素，由外部手动挂载。
 * ### 返回值说明
 * @returns {HTMLButtonElement} 返回创建好的DOM 元素对象——`button`。
 */
export function buttonDesignedForChangingBackgroundColour(className_for_css_style, shallowName, darkName, whether_automatic_loading) {
    const my_tasks = new ManipulateDOMs(`添加一个更改页面背景颜色的按钮控件`);
    let bodys = my_tasks.getElementsWithQuerySelector("body")
    let body = bodys[0]
    let button = my_tasks.createElement("button")
    document.addEventListener("DOMContentLoaded", (event) => {
        button.innerText = shallowName
        button.addEventListener("click", (event) => {
            body.classList.toggle(className_for_css_style)
            if (
                body.classList.contains(className_for_css_style)) {
                button.innerText = darkName
            } else { button.innerText = shallowName }; return event;
        }); return event
    })
    if (whether_automatic_loading === true) {
        my_tasks.addChildNodeToFatherNode(button, body)
    } else {
        print(`未设置自动装载`)
    }
    return button
}
/**
 * ## 函数说明
 * - 动态创建一个完整的 `<form>` 表单元素，包含指定的输入框 `<input>` 与标签 `<label>`。
 * - 执行流程：
 *   1. 实例化 `ManipulateDOMs` 工具类。
 *   2. 创建 `<form>` 元素，并设置 `action`、`method`、`id`、`class`、`name` 属性。
 *   3. 遍历 `inputs_types` 对象的键（即输入框的 `name`）。
 *   4. 为每个键创建 `<input>` 元素，并绑定对应的 `id`、`type`、`class`。
 *   5. 为每个键创建 `<label>` 元素，设置 `for` 属性关联对应的 `input` 的 `id`，并将键名作为文本插入。
 *   6. 将 `<input>` 挂载到 `<label>` 内部，再将 `<label>` 挂载到 `<form>` 内部。
 *   7. 将生成的元素收集到数组中并返回。
 * ### 参数说明
 * @param {string} [action="./"] - 表单提交的目标 URL。
 * @param {string} [form_id="form-account"] - 表单的 `id` 属性值。
 * @param {string} [form_class="forms"] - 表单的 `class` 属性值。
 * @param {string} [form_method="post"] - 表单的提交方式（`get` 或 `post`）。
 * @param {string} [form_name="form-account"] - 表单的 `name` 属性值。
 * @param {Record<string, string>} [inputs_types={"username":"text", "password":"password", "url":"url", "date":"date", "email":"email", "submit":"submit"}] 
 * - 键值对对象。键为输入框的 `name` 和 `id` 后缀，值为 `input` 的 `type` 属性（如 `text`, `password` 等）。
 * @param {string} [inputs_class="inputs"] - 所有生成的 `<input>` 元素的 `class` 属性值。
 * ### 返回值说明：
 * @returns {{ form: HTMLFormElement, inputs: Array<HTMLInputElement>, labels:Array<HTMLLabelElement>}}
 * - 返回一个对象
 * - `form`：创建好的表单根节点。
 * > `form`也是对象的`key`，调用 **创建好的表单根节点-form元素**
 * - `inputs`：表单内所有 `input` 元素组成的数组。
 * >  `inputs`也是对象的`key`，调用 **表单内所有 `input` 元素组成的数组。**
 * - `labels`：表单内所有 `label` 元素组成的数组。
 * > `labels`也是对象的`key`，调用 **表单内所有 `label` 元素组成的数组。**
 */
export function createFormElement(action = "./", form_id = "form-account", form_class = "forms", form_method = "post", form_name = "form-account", inputs_types = {
    "username": "text", "password": "password", "url": "url", "date": "date", "email": "email",
    "submit": "submit"
}, inputs_class = "inputs"
) {
    const my_tasks = new ManipulateDOMs(`建立一个form表单元素`, `主要用于账户信息输入`, `默认方法为"post"`);
    let form = my_tasks.createElement("form")
    my_tasks.setAttributeWithValue(form, "action", action)
    my_tasks.setAttributeWithValue(form, "method", form_method)
    my_tasks.setAttributeWithValue(form, "id", form_id)
    my_tasks.setAttributeWithValue(form, "class", form_class)
    my_tasks.setAttributeWithValue(form, "name", form_name)
    const inputs_names = Object.keys(inputs_types)
    let inputs = []; let labels = []
    print(inputs_names)
    for (let index = 0; index < inputs_names.length; index = index + 1) {
        let input = my_tasks.createElement("input")
        my_tasks.setAttributeWithValue(input, "name", inputs_names[index])
        my_tasks.setAttributeWithValue(input, "id", `input-${inputs_names[index]}`)
        my_tasks.setAttributeWithValue(input, "type", inputs_types[inputs_names[index]])
        my_tasks.setAttributeWithValue(input, "class", inputs_class)
        // 📋 附赠：最常用的合法 autocomplete 速查表
        // 以后写表单，认准这些标准值，浏览器就能自动帮你填充：
        // 场景	标准值 (autocomplete=)	说明
        // 用户名	username	登录时的账号/用户名。
        // 当前密码	current-password	登录时的密码（浏览器会提示自动填充保存过的密码）。
        // 新密码	new-password	注册或修改密码时使用（浏览器会提示生成强密码）。
        // 电子邮箱	email	自动填充邮箱地址。
        // 手机号	tel	自动填充电话号码。
        // 全名/姓名	name	自动填充姓名。
        // 名字/姓氏	given-name / family-name	分别是名和姓。
        // 关闭自动填充	off	告诉浏览器：别自作多情，我不需要你填。
        if (inputs_names[index] === "password") {
            my_tasks.setAttributeWithValue(input, "autocomplete", `current-password`)
        }
        else if (inputs_names[index] !== "submit") { my_tasks.setAttributeWithValue(input, "autocomplete", `${inputs_names[index]}`) }
        else { print(`无需设置autocomplete属性`) }
        let label = my_tasks.createElement('label')
        my_tasks.setAttributeWithValue(label, "id", `label-${inputs_names[index]}`)
        my_tasks.setAttributeWithValue(label, "class", `labels-account`)
        my_tasks.setAttributeWithValue(label, "for", `input-${inputs_names[index]}`)
        my_tasks.insertTextIntoElements(label, inputs_names[index])
        my_tasks.addChildNodeToFatherNode(input, label)
        my_tasks.addChildNodeToFatherNode(label, form)
        inputs.push(input); labels.push(label)
    }
    /**
      * #### 返回值说明：
      * @type {{ form: HTMLFormElement, inputs: Array<HTMLInputElement>, labels:Array<HTMLLabelElement>}}
      * - 返回一个对象
      * - `form`：创建好的表单根节点。
      * > `form`也是对象的`key`，调用 **创建好的表单根节点-form元素**
      * - `inputs`：表单内所有 `input` 元素组成的数组。
      * >  `inputs`也是对象的`key`，调用 **表单内所有 `input` 元素组成的数组。**
      * - `labels`：表单内所有 `label` 元素组成的数组。
      * > `labels`也是对象的`key`，调用 **表单内所有 `label` 元素组成的数组。**
     */
    const returns = { "form": form, "inputs": inputs, "labels": labels }
    return returns
}
/**
 * ## 函数说明
 * 动态创建一个包含指定数量 `<textarea>` 元素的 `<form>` 表单。
 * ### 执行流程：
  * 1. 实例化 DOM 工具类。
  * 1. 创建 `<form>` 元素，并遍历 `formOptions` 设置其各项基础属性。
  * 1. 根据 `number_of_textareas` 参数进入循环。
  * 1. 在每次循环中，创建 `<label>` 与 `<textarea>` 元素。
  * 1. 为 `<label>` 设置 `for` 属性绑定对应的 `<textarea>` 的 `id`，并插入文本内容。
  * 1. 为 `<textarea>` 设置 `id`、`name`、`class` 属性。
  * 1. 将 `<textarea>` 挂载到 `<label>` 内部，再将 `<label>` 挂载到 `<form>` 内部。
  * 1. 若发生异常，捕获并打印报错信息。
 * ### 参数说明
 * @param {number} number_of_textareas - 需要生成的文本框（textarea）数量
 * * 默认值为 1。
 * @param {string} label_name_of_textarea - 每个 `<label>` 元素的文本前缀
 * * 默认值为 "输入框"。最终生成的文本格式为 "输入框-0"、"输入框-1"。
 * @param {Record<string, string>} formOptions - 表单容器的属性配置对象
 * * 包含 id, class, name, method, action。
 * > **example**
 * >
 * > 参数 `formOptions` 的默认值设置为：
 * >
 * >```javascript
 * >{"id": "form-textarea", "class": "forms-textareas", "name": "form-textarea", "method": "post", "action": "./"}
 * >```
 * @param {Record<string, string>} textareaOptions - 文本框元素的属性配置对象
 * * 包含 id, class, name。注意：实际生成的 `id` 会拼接循环索引以保持唯一性。
 * > **example**
 * >
 * > 参数 `textareaOptions` 的默认值设置为：
 * >
 * >```javascript
 * >{id: "textarea-form", class: "textareas-form", name: "textarea-form"}
 * >```
 * ### 返回值说明
 * @returns {HTMLFormElement} 返回创建好的 DOM 元素对象——`form`
 */
export function createTextareasInFormElement(number_of_textareas = 1, label_name_of_textarea = "输入框"
    , formOptions = {
        "id": "form-textarea",
        "class": "forms-textareas",
        "name": "form-textarea",
        "method": "post",
        "action": "./"
    }, textareaOptions = { id: "textarea-form", class: "textareas-form", name: "textarea-form", }
) {
    const my_tasks = new ManipulateDOMs(`创建若干文本框`, `文本框在Form表单内`, `最终以Form表单包裹textarea的形式呈现`);
    let form = my_tasks.createElement("form")
    let keys = Object.keys(formOptions)
    let values = Object.values(formOptions)
    for (let index = 0; index < keys.length; index++) {
        my_tasks.setAttributeWithValue(form, keys[index], values[index])
    }
    try {
        for (let index = 0; index < number_of_textareas; index += 1) {
            let label = my_tasks.createElement('label')
            let textarea = my_tasks.createElement('textarea')
            my_tasks.setAttributeWithValue(label, "for", `${textareaOptions.id}-${index}`)
            my_tasks.setAttributeWithValue(textarea, "id", `${textareaOptions.id}-${index}`)
            my_tasks.setAttributeWithValue(textarea, "name", textareaOptions.name)
            my_tasks.setAttributeWithValue(textarea, "class", textareaOptions.class)
            my_tasks.insertTextIntoElements(label, `${label_name_of_textarea}-${index}`)
            my_tasks.addChildNodeToFatherNode(textarea, label)
            my_tasks.addChildNodeToFatherNode(label, form)
        }
    } catch (error) {
        print(`报错信息：\n${error}`)
    }
    return form
}
/**
 * ## 类说明
 * - 封装了一些特定使用场景下的简易代码模板。
 * > ***注意事项***:
 * >
 * >> 1. 仅简单示例基本写法的逻辑和结构
 * >>
 * >> 2. 实际开发根据业务场景调整函数细节
 * >>
 * >> 3. 原始函数仅为示例，结构过于简单，实际开发中无法直接使用!!!
 */
export class SimpleCodesTemplatesForSomeUsageSituation {
    /**
     * ## 函数说明
     * - 类的构造函数，用于初始化实例属性并绑定特定的工具函数。
     * * 执行流程：
      * 1. 将传入的参数赋值给实例属性 `this.parameters`。
      * 1. 定义一个名为 `debounce` 的防抖函数，并挂载到 `this.debounce`。
      * 1. 定义一个名为 `throttle` 的节流函数，并挂载到 `this.throttle`。
     * ### 参数说明
     * @param {any} parameters - 实例属性，接收外部传入的参数。
     * ### 返回值说明
     * @returns {void} 构造函数不返回内容。
     */
    constructor(parameters) {
        this.parameters = parameters
        /**
  * ## 函数说明
  * * 动态为目标 DOM 元素绑定防抖（Debounce）事件。
  * * 执行流程：
   * 1. 声明闭包变量 `timer` 用于记录定时器 ID。
   * 1. 监听目标元素的指定事件。
   * 1. 每次触发事件时，若存在未执行的定时器则清除。
   * 1. 重新设置定时器，延迟 `delay_time` 毫秒后执行内部业务代码。
  * ### 参数说明
  * @param {string} event_type - 需要监听的事件类型（如："input", "click"）。
  * @param {number} delay_time - 防抖延迟时间（毫秒）。
  * @param {HTMLElement} element - 需要绑定事件的目标 DOM 元素。
  * ### 返回值说明
  * @returns {undefined} 无返回值。
  */
        this.debounce = function debounce(event_type, delay_time, element) {
            let timer = null
            element.addEventListener(event_type, (event) => {
                if (timer != null && timer != undefined) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    event.preventDefault()
                    print(`防抖业务代码部分`)
                    // print(`${event.target}`)
                    // print(`${event.target.id}`)
                    // print(`${event.target.value}`)
                    // print(`${event.type}`)
                    print(`${element.value}`); return undefined
                }, delay_time);
            })
        }
        /**
      * ## 函数说明
      * * 动态为目标 DOM 元素绑定节流（Throttle）事件。
      * * 执行流程：
       * 1. 声明闭包变量 `last_time` 记录上一次执行的时间戳。
       * 1. 监听目标元素的指定事件。
       * 1. 每次触发事件时，获取当前时间戳 `now`。
       * 1. 判断时间差是否大于 `delay_time`，若大于则更新 `last_time` 并执行内部业务代码。
      * ### 参数说明
      * @param {string} event_type - 需要监听的事件类型（如："scroll", "resize"）。
      * @param {number} delay_time - 节流间隔时间（毫秒）。
      * @param {HTMLElement} element_target - 需要绑定事件的目标 DOM 元素。
      * ### 返回值说明
      * @returns {IArguments} 返回内置的 `arguments` 对象。
      */
        this.throttle = function throttle(event_type, delay_time, element_target) {
            let last_time = 0
            element_target.addEventListener(event_type, (event) => {
                let now = Date.now()
                event.preventDefault()
                if (now - last_time > delay_time) {
                    last_time = now
                    setTimeout(() => {
                        print(`节流业务代码部分`)
                        // print(event.type)
                        // print(event.target)
                        // print(event.target.id)
                        // print(event.target.value)
                        return undefined
                    }, delay_time);
                }
            })
            return arguments
        }
    }
}
