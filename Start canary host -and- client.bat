@echo starting canary in host mode - open page normally debugged -- F12

start "host" "C:\Users\otis\AppData\Local\Google\Chrome SxS\Application\chrome" --remote-debugging-port=9222

@echo .
@echo ready to start canary client to debug host
pause

@echo .
start "client" "C:\Users\otis\AppData\Local\Google\Chrome SxS\Application\chrome" --user-data-dir=canary_client_userdata

@echo .
@echo browse to host devtools: http://localhost:9222
@echo .
@echo select devtools under Inspectable
pause
