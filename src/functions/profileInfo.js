const axios = require("axios")

module.exports = async function (uuid) {
    let uuidParsed = uuid.replaceAll('-', '')
    let info = {}

    await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuidParsed}`).then( res => {
        info = res.data
    }).catch(err => console.log)

    return info
}