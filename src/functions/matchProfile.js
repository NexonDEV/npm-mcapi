const axios = require("axios")

module.exports = async function (name, uuid) {
    let uuidParsed = uuid.replaceAll('-', '')
    let isMatching = false

    await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`).then( res => {
        if(res.data.id && res.data.id === uuidParsed) isMatching = true
    }).catch(err => {})

    return isMatching
}