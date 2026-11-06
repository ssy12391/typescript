# encoding=utf-8
# 引入内置库或者第三方库
# region
import os, sys, asyncio
from typing import Any

# endregion
# 引入自定义模块
# region
sys.path.append(os.path.dirname(p=os.path.dirname(p=__file__)))
# endregion
# 全局常量
# region


# endregion
# 全局变量
# region

sample: dict[str, Any] = {"username": "simon"}
"""#### 变量说明
- 测试用变量
Returns:
    _type_: 字典类型
"""


# endregion
# 代码正文
# region
async def tasks(*args: Any, **kwargs: Any) -> dict[str, Any]:
    """### 函数说明
    - 存放常规数据的`async`函数，需要用一个`async`函数结合`await`拿到结果，
    Returns:
        dict[str,Any]: 字典类型
    """
    result: dict[str, Any] = {
        "args": args,
        "kwargs": kwargs,
    }  # ### 变量说明: 测试用变量，封装结果
    """#### 变量说明
    - 测试用变量
    Returns:
        _type_: 字典类型
"""
    return result


async def main(*args: Any, **kwargs: Any) -> tuple[Any, Any]:
    """函数说明

    Returns:
        ttuple[Any, Any]: 元组类型,封装了`corountine`对象或者`Future`对象
    """
    result = await tasks(*args, **kwargs)
    results = await asyncio.gather(
        tasks(3, a=2), tasks(9, b=3), tasks(23, 4, 5, 66, 7, sadfljk=2134, dsalfjkl=124)
    )

    return result, results


result = asyncio.run(main=main(1, k=2))


# endregion
if __name__ == "__main__":
    # 单元测试例
    # region
    print(f"{'分割线':*^120}")
    print(f"{result}")
    # endregion
