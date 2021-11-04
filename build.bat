python -m venv venv
call venv/Scripts/activate.bat


@REM Build protobuf specifications for both JS and C and move generated files to corresponding projects

mkdir proto/js
mkdir proto/c

pip install nanopb

nanopb_generator.exe -D proto/c proto/settings.proto
protoc --js_out=import_style=commonjs,binary:proto/js settings.proto

robocopy proto/js frontend/src/proto *


@REM Build frontend and move bundle to ESP SPIFFS data directory

cd frontend
npm install
npm run build

cd ..
robocopy frontend/dist esp_backend/data *
