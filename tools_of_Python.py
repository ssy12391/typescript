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
    source_path: str = SOURCE_PATH,
    format: str = "docx",
    source_title: str = "",
    encoding: str | None = "utf-8",
    mode: str = "r",
) -> dict[str, str] | None:
    """将指定路径的 Markdown 源文件转换为其他格式（默认 docx）的文档文件，并返回转换结果的元信息字典。

    ## 函数说明

    - 执行流程：
      1. 判断 `source_title` 是否为空字符串，决定输出文件名的生成方式。
      2. 为空时，以 `mode` 模式和 `encoding` 编码打开 `source_path`，读取文件首行作为标题 `title`。
      3. 将 `title` 拼接当前系统时间（`%Y年%m月%d日 %H时%M分%S秒`），并依次剔除 `#`、`%`、`$`、换行符与空格，生成合法文件名 `save_title`，再拼出绝对保存路径 `save_path`。
      4. 不为空时，直接以 `source_title` 作为文件名拼出绝对保存路径 `save_path`，跳过读取首行的流程。
      5. 调用 `convert_file` 将源文件转换为目标格式并写出；若转换环节抛出异常，打印报错信息并返回 `None`，转换成功则组装结果字典返回。

    ### 参数说明

    @param {str} source_path - 待转换的 Markdown 源文件的路径。
        - 默认取模块常量 `SOURCE_PATH`，即不传参时按项目预设的源文件执行转换。

        > **example**
        >
        > 调用函数后，参数 `source_path` 的值设置为 "./notes/meeting.md"。
        > 项目中必须真实存在 `./notes/meeting.md` 文件，否则当 `source_title` 为空时，
        > `open` 读取首行会因找不到文件直接抛出 `FileNotFoundError`（该调用不在 `try`
        > 保护范围内），函数不会走到返回 `None` 的分支。
        >
        > ```python
        > transfer_markdown_to_other_format(source_path="./notes/meeting.md")
        > ```

    @param {str} format - 转换的目标文档格式（作为输出文件的扩展名，不带点号）。
        - 默认为 `"docx"`，也可传入 `"pdf"`、`"html"` 等底层 `convert_file` 支持的目标格式。

    @param {str} source_title - 手动指定的输出文件名（不含扩展名）。
        - 传空字符串则走"自动命名"分支：源文件首行 + 当前时间戳生成文件名。
        - 传非空字符串则直接以该值命名输出文件，且不再读取源文件首行。

    @param {str | None} encoding - 读取源文件首行标题时使用的字符编码。
        - 默认 `"utf-8"`；传 `None` 则交由 Python 按平台默认编码处理，含中文的标题存在乱码风险。

    @param {str} mode - 打开源文件时使用的文件模式。
        - 默认 `"r"` 只读，仅用于读取首行标题，一般无需改动。

    ### 返回值说明

    @returns {dict[str, str] | None} 转换成功时返回结果字典；转换环节抛出异常时返回 `None`。
        - 成功字典含三个键：`path`（输出文件的绝对路径）、`resource`（源文件路径）、`format`（目标格式）。
    """
    if len(source_title) == 0:
        with open(file=source_path, mode=mode, encoding=encoding) as file:
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


result = transfer_markdown_to_other_format(
    source_path=SOURCE_PATH,
    format="docx",
)


# endregion
if __name__ == "__main__":
    # 单元测试例
    # region
    print(f"{'分割线':*^120}")
    print(result)
    # endregion
