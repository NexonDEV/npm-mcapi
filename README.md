
# NodeJS Minecraft Wrapper



## Installation

Install minecraftjs with npm

```bash
  npm install minecraftjs-npm
```
    
## Features

- Get user UUID by name
- Get profile info
- Check if user is premium by UUID
- Check if server is blocked by Mojang
- Get server info
- Match username and UUID
- Get username by UUID
## Usage/Examples

### Get UUID by name

```javascript
const mc = require("minecraftjs-npm")

let uuid = mc.nameToUuid("Notch")
console.log(uuid)
```

### Get name by UUID

```javascript
const mc = require("minecraftjs-npm")

let name = mc.uuidToName("069a79f444e94726a5befca90e38aaf5")
console.log(name)
```

### Get profile info

```javascript
const mc = require("minecraftjs-npm")

let info = mc.profileInfo("069a79f444e94726a5befca90e38aaf5")
console.log(info)
```

### Match name and UUID

```javascript
const mc = require("minecraftjs-npm")

let match = mc.matchProfile("Notch", "069a79f444e94726a5befca90e38aaf5")

if (match) {
    console.log("OK")
} else {
    console.log("ERROR")
}
```

### Check if user is premium

```javascript
const mc = require("minecraftjs-npm")

let premium = mc.isPremium("069a79f444e94726a5befca90e38aaf5")

if (premium) {
    console.log("premium")
} else {
    console.log("cracked")
}
```

### Get server info

```javascript
const mc = require("minecraftjs-npm")

let info = mc.serverInfo("hypixel.net")
console.log(info)
```

### Check if server is blocked by Mojang

```javascript
const mc = require("minecraftjs-npm")

let blocked = mc.isServerBlocked("hypixel.net")

if (blocked) {
    console.log("Server is blocked")
} else {
    console.log("Server is not blocked")
}
```
## Author

[NexonDEV](https://www.github.com/NexonDEV)


## License

[MIT](https://choosealicense.com/licenses/mit/)

