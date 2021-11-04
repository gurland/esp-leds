# esp-leds


## Requirements

1. `protoc`
2. `python`
3. `npm`

## Build process

1. Build .proto files
2. Move proto/js/*.js files to ESP frontend lib
3. Move proto/c/*.(c|h) files to ESP backend lib
4. Create frontend build using npm
5. Place client bundle to esp_backend/data directory and upload to SPIFFS
6. Build and upload ESP firmware

## TODO:

- Webpack bundle index.html
- Linux builds
- FastLED configuration
- Different animation strategies
- Use build system for all-in-one simplified launch (build & upload)

### Research
Python ESP utils for generating SPIFFS snapshots and uploading them; ESP tools for firmware builds & upload
(pio?)

