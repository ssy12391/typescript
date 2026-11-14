rem @echo off
del ".\*pdf" && del ".\*jpg" && del ".\*jpeg" && del ".\*png"
rmdir /s /q .\repaired 
del "*.doc*" && del "*.ppt*"
del ".\voice*.mp3" && del ".\*.mp4" && del ".\list*.txt" && rmdir  /s /q .\__pycache__
del ".\*md" && del "*.json" && del ".\*mp3"  && del ".\*srt" &&  del ".\*list" && rmdir /s/q .\*srts
del ".\*rar" &&  del ".\*zip"  &&  del ".\*7z" 
del ".\file*txt"
rmdir /s/	q .\voices
rmdir /s/q .\srts
del ".\temporary.js"
del ".\publictools.js"
del ".\axios.min.js"
del ".\jquery-4.0.0.min.js"
del ".\temporary*.html"
del ".\temporary.css"
del ".\publictools.css"
del ".\PythonModule*.py" && rmdir /s/q .\PythonPackage
del /f /s /q ".\pictures\*" || del /f/s/q ".\images\*" 
rmdir /s/q .\temporary_audit
del ".\*.txt"
rmdir /s/q .\node_modules
del /f/s/q ".\createPPTXfromMarkdwon\*" && rmdir /s/q .\createPPTXfromMarkdwon
rem del /f/s/q ".\.git/*" && rmdir /s/q .\.git
del /s/f/q ".\*.log"
rmdir /s /q .\temporary_audit
rmdir /s/q .\.git
rem pause