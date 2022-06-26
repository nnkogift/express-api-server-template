

#!/bin/bash

APP_VERSION=$(node -p -e "require('./package.json').version")

APP=whatsapp_automation_server-"$APP_VERSION".zip

cp package.json .env.example app/
cd app || return

zip -r "$APP" .

mv "$APP" ./app/

cd ../../