@echo off

echo.
echo ----------------------------------------------------------------------------------------------------
echo Building "BlogApp"
echo.

echo.
echo ----------------------------------------------------------------------------------------------------
call firebase use
echo.

call yarn generate
if errorlevel 1 goto error

echo.
echo ----------------------------------------------------------------------------------------------------
echo Deploying to firebase
echo.

echo.
echo ----------------------------------------------------------------------------------------------------
call firebase use
echo.

call firebase deploy --only hosting
if errorlevel 1 goto error

goto end

:error
echo Error!
goto end

:end
