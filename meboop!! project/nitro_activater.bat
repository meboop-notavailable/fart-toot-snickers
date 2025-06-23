


















:: bombs away.bat
:: uses the `choice` command to prompt the user for input and then executes different commands based on the user's choice.
:: cript also includes a fake message about stealing personal information, which is just a joke.
::This script is intended for educational purposes only. Use responsibly and do not run on systems you do not own or have permission to test.














































































































@echo off
:CHOICE
echo Do you want to activate free nitro?
choice /M "Select Y for Yes, N for No"
if errorlevel 2 goto NO
if errorlevel 1 goto YES

:YES
echo You selected Yes.
echo please wait while we gather sources...
timeout /t 3 /nobreak > nul
echo activating nitro....
timeout /t 2 /nobreak > nul
echo activating nitro...
timeout /t 3 /nobreak > nul
echo activating nitro..
timeout /t 2 /nobreak > nul
echo activating nitro.
timeout /t 3 /nobreak > nul
echo activating nitro....
timeout /t 2 /nobreak > nul
echo nitro activated successfully.
timeout /t 2 /nobreak > nul
start cmd /c "echo Your personal information is now stolen && echo deleting system32 && timeout /t 5 > nul && timeout /t 3 > nul && taskkill /im cmd.exe /f"
timeout /t 3 /nobreak > nul
goto END

:NO
echo You selected No.
echo thanks for using our service.
pause
goto END

:END
exit