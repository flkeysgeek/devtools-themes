@echo starting canary in HOST mode...
start "host" "C:\Users\otis\AppData\Local\Google\Chrome SxS\Application\chrome" --remote-debugging-port=9222
@echo .
@echo starting canary in host mode - open page normally debugged -- F12
@echo .
@echo -------------------------------------------------
@echo browse to some page -- press F12 to open devtools
@echo -------------------------------------------------
@echo .
@echo when done press any key to start canary CLIENT
@echo .
@echo on CLIENT: browse to http://localhost:9222
@echo .
@echo under Inspectable, select:Developer Tools...
@echo .
@echo elements has HOST devtools DOM
@echo .
@echo use ARROW icon in upper left corner of CLIENT devtools to inspect element in HOST devtools
@echo .

@pause
@echo .

start "client" "C:\Users\otis\AppData\Local\Google\Chrome SxS\Application\chrome" --user-data-dir=canary_client_userdata