title 误删后强制重新覆盖远程备份(仅限单人开发)
git init&&git add .\&&git commit --message "备份时间：%date%-%time%"
git remote add origin https://github.com/ssy12391/typescript
git push origin master --force --set-upstream
pause
