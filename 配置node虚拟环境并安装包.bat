rem node 的配置项目环境、安装项目环境需要的包，都是封装在npm.cmd这个bat文件里，
rem npm.cmd本质是一个bat批处理文件，因此执行另一个bat要加call
rem bat 里调 bat，每一处都要 call，不是只给第一个或最后一个加
rem npx 也是 .cmd（npx.cmd）——和 npm 一模一样的三层结构（npx.exe → npx.cmd → npx-cli.js），调用 bat 必须加 call
rem 规则回顾：凡是 npm 系的命令（npm / npx），在 bat 里调用一律加 call。


call npm init --yes
call ".\usePythonModuleTemplate.bat"
call npm.cmd install axios&call npm install pptxgenjs
call npm install -D typescript tsx @types/node
call npx tsc --init
rem 运行typescript的方式：npx -tsx "ts程序脚本所在的路径"
pause