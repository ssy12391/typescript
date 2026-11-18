# encoding=utf-8
# 导入第三方库或者内置库
import os, sys
from typing import Any
from flask import Flask, url_for, redirect, render_template, request
from flask.blueprints import Blueprint
from werkzeug.routing import BaseConverter
from flask_cors import CORS

# 导入自定义模块
sys.path.append(os.path.dirname(p=os.path.dirname(p=__file__)))
# 全局变量
# 全局常量
HOST = "0.0.0.0"
PORT = 5000
# 代码正文
with open(file="./log.log", encoding="utf-8", mode="a") as file:
    print(__file__, __name__, file=file)


class PhoneNumber(BaseConverter):

    regex: str = r"^1{1,}\d{10,}$"


flask_application = Flask(
    import_name=__name__,
)
allow = CORS(app=flask_application)

flask_application.url_map.converters["phone"] = PhoneNumber


@flask_application.route(rule="/", methods=["get".upper()])
def default_page():
    return "default_page,{method}".format(method="get")


@flask_application.route(rule="/<phone:number>", methods=["get".upper()])
def cunstomedParameter(number):

    return "手机号:{index}".format(index=number)


@flask_application.route(rule="/get/",methods=["get".upper()])
def get_page():
    values=request.args.to_dict()
    
    return f"get请求头的数据：{values}"

@flask_application.route(rule="/post", methods=["post".upper()])
def post_page():
    values=request.form.to_dict()
    values_of_jsons=request.get_json(silent=True)
    return f"post请求\n表单参数:{values}\njson参数:{values_of_jsons}"

@flask_application.route(rule="/upload",methods=["post".upper()])
def upload_file_page():
    file=request.files["file"]
    file_names=file.filename
    file.save(dst=f"./{file_names}")
    return f"文件已经上传：{file_names}"

# 测试用例
if __name__ == "__main__":
    print("{start:*^120}".format(start="程序开始"))
    flask_application.run(
        debug=True,
        host=HOST,
        port=PORT,
    )
    print("{end:*^120}".format(end="程序结束"))
