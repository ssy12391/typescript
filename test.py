# encoding=utf-8
# 导入第三方库或者内置库
import os, sys
from typing import Any
from flask import (
    Flask,
    request,
    redirect,
    url_for,
    Blueprint,
    render_template,
    make_response,
    Response,
    jsonify,
)
from flask_cors import CORS
from werkzeug.routing import BaseConverter
from werkzeug.utils import secure_filename
# 导入自定义模块
sys.path.append(os.path.dirname(p=os.path.dirname(p=__file__)))
# 全局常量
HOST: str = "0.0.0.0"
PORT: int = 5000
DEBUG: bool = True
# 全局变量
template_name_or_list_path: str = r"./测试文档.html"
"""### 变量说明
    - 服务器默认页面的html5模板
    Returns:
        _type_: 字符串类型，html5模板的路径
    """
headers: dict[str, Any] = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer MyApikey",
}
"""#### 变量说明
    - 默认的请求头
        - 请求体发送到数据类型是json形式
        - 响应头返回的数据类型是json形式
    Returns:
        _type_: 字典形式
    """
# 代码正文
flask_application: Flask = Flask(
    import_name=__name__,
    template_folder=os.path.abspath(path="./"),
    static_folder=os.path.abspath(path="./"),
    static_url_path="",
)
allow = CORS(
    app=flask_application,
)
class MobilePhoneNumberConvert(BaseConverter):
    regex: str = r"^[^a-zA-Z](?:\d){10,}$"
flask_application.url_map.converters["mobile"] = MobilePhoneNumberConvert
@flask_application.route(rule="/", methods=["get".upper()])
def main_page() -> str:
    return "Default Page"
@flask_application.route(
    rule="/upload",
    methods=[
        "post".upper(),
        "get".upper(),
    ],
)
def upload_page():
    if request.method == "get".upper():
        template = render_template(template_name_or_list=template_name_or_list_path)
        return template
    elif request.method == "post".upper():
        try:
            file = request.files["file"]
        except Exception as error:
            print(f"报错信息\t{error}")
            return redirect(location=url_for(endpoint=main_page.__name__))
        else:
            if file.filename is not None and file.filename is not "":
                file_name = os.path.abspath(path=secure_filename(file.filename))
                file.save(dst=file_name)
                return f"文件已上传至：{file_name}"
            else:
                return redirect(location=url_for(endpoint=main_page.__name__))
    else:
        return "上传文件"
@flask_application.route(rule="/<mobile:mobile_phone_number>", methods=["get".upper()])
def other_page(mobile_phone_number: str) -> tuple[str, int, dict[str, Any]] | str | Any:
    if mobile_phone_number.isdigit() is True:
        return (f"路由参数(动态)：{mobile_phone_number}", 200, headers)
    else:
        return f"参数类型不对,无法定位到页面", 400, headers
# 测试用例
if __name__ == "__main__":
    print("{start:*^120}".format(start="程序开始"))
    flask_application.run(host=HOST, port=PORT, debug=DEBUG)
    print("{end:*^120}".format(end="程序结束"))
