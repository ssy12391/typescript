# encoding=utf-8
# 引入内置库或者第三方库
# region
import os, sys
from typing import Any
from pypandoc import convert_file
import datetime

# endregion
# 引入自定义模块
# region
sys.path.append(os.path.dirname(p=os.path.dirname(p=__file__)))
# endregion
# 全局常量
# region
SOURCE_PATH: str = "./note.md"
"""## 全局常量说明
    - markdown源文件的路径
    
    Returns:
        _type_: 字符串类型
    """
# endregion
# 全局变量
# region

# endregion
# 代码正文
# region


def transfer_markdown_to_other_format(
    source_path: str = SOURCE_PATH, format: str = "docx", source_title: str = ""
) -> dict[str, str] | None:
    """### 函数说明
    - **格式转化**：把markdown文件转化为其他格式的文件

    Args:
        ***source_path*** (str, optional): markdown源文件的路径.
        ***format*** (str, optional): 想转化的文件格式后缀名，默认值为"docx".

    Returns:
        ***dict[str, str]|None***: 字典或者None类型，如成功转化格式，则字典包含源文件路径、转化后的保存路径、转化后的文件格式
    """
    if len(source_title) == 0:
        with open(file=source_path, mode="r", encoding="utf-8") as file:
            title: str = file.readlines()[0]
            save_title: str = (
                (
                    f"{title}（{datetime.datetime.now().strftime(r'%Y年%m月%d日 %H时%M分%S秒')}）"
                )
                .strip()
                .replace("#", "")
                .replace("%", "")
                .replace("$", "")
                .replace("\n", "")
                .replace(" ", "")
            )
            save_path: str = os.path.abspath(path=rf".\{save_title}.{format}")
    else:
        save_path: str = os.path.abspath(path=rf".\{source_title}.{format}")
    try:
        convert_file(
            source_file=source_path,
            to=format,
            outputfile=save_path,
        )

    except Exception as error:
        print(f"报错信息:{error}")
        return None

    else:
        result: dict[str, str] = {
            "path": save_path,
            "resource": source_path,
            "format": format,
        }
        return result


result = transfer_markdown_to_other_format(source_path=SOURCE_PATH, format="docx")


# endregion
if __name__ == "__main__":
    # 单元测试例
    # region
    print(f"{'分割线':*^120}")
    print(result)
    # endregion
