const axios = require("axios")

module.exports = async function (uuid) {
    let name = ""
    let uuidParsed = uuid.replaceAll('-', '')

    await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuidParsed}`).then( res => {
        if(res.data.name) name = res.data.name
    }).catch(err => console.log)

    return name
}