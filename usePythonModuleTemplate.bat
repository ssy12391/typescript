@echo off
echo python模板.py创建时间：%year%-%month%-%day% %hour%:%minute%:%second% > file.txt
copy "D:\OneDrive\临时\PythonModuleTemplate.py" ".\PythonModuleTemplate.py"
rename "PythonModuleTemplate.py" "PythonModule.py"



copy "D:\OneDrive\文档\AI短视频脚本信息.xlsx" ".\AI短视频脚本信息.xlsx"
copy "D:\OneDrive\文档\temporary.css" ".\temporary.css"
copy "D:\OneDrive\文档\temporary.html" ".\temporary.html"
copy "D:\OneDrive\文档\temporary.js" ".\temporary.js"
copy "D:\OneDrive\文档\publictools.js" ".\publictools.js"
copy "D:\OneDrive\文档\.env" ".\.env"
copy "D:\OneDrive\文档\axios.min.js" ".\axios.min.js"
copy "D:\OneDrive\文档\jquery-4.0.0.min.js" ".\jquery-4.0.0.min.js"
copy "D:\OneDrive\文档\publictools.css" ".\publictools.css"


pause


