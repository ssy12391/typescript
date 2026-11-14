# encoding=utf-8
# 引入内置库或者第三方库
# region
import os, sys
from flask import Flask,url_for,render_template,redirect
from flask.blueprints import Blueprint
from os import getenv
from dotenv import load_dotenv
import flask
# endregion
# 引入自定义模块
# region
sys.path.append(os.path.dirname(p=os.path.dirname(p=__file__)))
# endregion
# 全局常量
# region
HOST: str = "0.0.0.0"
"""## 变量说明
    - `localhost`:本地主机的ip地址，他人无法访问到本机的flask程序
    - `127.0.0.1`:本地主机的ip地址，他人无法访问到本机的flask程序
    - `0.0.0.0`:本地网络的ip地址，他人可以访问到本机的flask程序
    Returns:
        _type_:string类型
    """
PORT: int = 5000
"""## 变量说明
    - 默认flask程度端口号是`5000`
    Returns:
        _type_: integer类型
    """
ENCODING:str="utf-8"
"""## 变量说明
    - 默认编码
    Returns:
        _type_: string类型
    """
# ENVIRONMENT_PATH:str=r"D:\OneDrive\文档\.env"
# endregion
# 全局变量
# region
flask_application: Flask = Flask(
    import_name=__name__,
)

# endregion
# 代码正文
# region
# load_dotenv(dotenv_path=ENVIRONMENT_PATH)
api_key: str | None = getenv(key="api_key0")
file=open(file="./logging.txt",mode="a",encoding=ENCODING)
print(api_key,file=file)
@flask_application.route(rule="/")
def main_page():
    result:str="this is a default page"
    return result

@flask_application.route(rule="/<string:parameter>")
def default_page(parameter):
    """## 函数说明
    - flask程序默认页面
    Returns:
        _type_: string类型，返回当前页面信息
    """
    if parameter.isdigit()==True:
        information: str = f"current page——{parameter}"

        return information
    else:
        url=url_for(endpoint=main_page.__name__)
        resnponse=redirect(location=url)
        return resnponse

    
    


# endregion
if __name__ == "__main__":
    # 单元测试例
    # region
    print(f"{'分割线':*^120}")
    flask_application.run(debug=True, host=HOST, port=PORT, load_dotenv=False)
    # endregion
