const axios = require("axios")

module.exports = async function (uuid) {
    let uuidParsed = uuid.replaceAll('-', '')
    let isPremium = false

    await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuidParsed}`).then( res => {
        if(res.data.name) isPremium = true
    }).catch(err => {})

    return isPremium
}