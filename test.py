# encoding=utf-8
# 导入第三方库或者内置库
import os, sys
from flask import Flask, url_for, redirect, render_template, request
from flask.blueprints import Blueprint
from werkzeug.routing import BaseConverter

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
flask_application.url_map.converters["phone"] = PhoneNumber


@flask_application.route(rule="/", methods=["get".upper()])
def default_page():
    return "default_page,{method}".format(method="get")


@flask_application.route(rule="/<phone:number>", methods=["get".upper()])
def cunstomedParameter(number):

    return "手机号:{index}".format(index=number)


@flask_application.route(rule="/<string:parameter>", methods=["GET"])
def get_args(parameter):
    key1="name"
    key2="gender"
    value1 = request.args.get(key=key1)
    value2 = request.args.get(key=key2)
    information=f"get请求\n路径参数:{parameter}\n查询参数:\n{key1}:{value1}\t{key2}:{value2}"
    print(information)
    return information



@flask_application.route(rule="/<string:parameter>", methods=["post"])
def post_args(parameter):
    key1="name"
    key2="gender"
    value1 = request.form.get(key=key1)
    value2 = request.form.get(key=key2)
    information=f"post请求\n路径参数:{parameter}\n查询参数:\n{key1}:{value1}\t{key2}:{value2}"
    print(information)
    return information


# 测试用例
if __name__ == "__main__":
    print("{start:*^120}".format(start="程序开始"))
    flask_application.run(
        debug=True,
        host=HOST,
        port=PORT,
    )
    print("{end:*^120}".format(end="程序结束"))
