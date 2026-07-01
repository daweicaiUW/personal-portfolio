@echo off
setlocal

cd /d "%~dp0"

echo ==========================================
echo Dawei Cai Portfolio - Local Development
echo ==========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found.
  echo Please install Node.js LTS from https://nodejs.org first.
  pause
  exit /b 1
)

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo npm.cmd was not found.
  echo Please reinstall Node.js and make sure Add to PATH is enabled.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Installing dependencies. This may take a few minutes...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo npm install failed. Please check the error above.
    pause
    exit /b 1
  )
)

echo.
echo Starting local website...
echo The browser will open http://localhost:3000 shortly.
echo Keep this window open while editing or previewing the site.
echo.

start "" cmd /c "timeout /t 5 >nul && start http://localhost:3000"
call npm.cmd run dev

pause
