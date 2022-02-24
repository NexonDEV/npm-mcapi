const axios = require("axios")

module.exports = async function (name) {
    let uuid = ""

    await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`).then( res => {
        if(res.data.id) uuid = res.data.id
    }).catch(err => console.log)

    return uuid
}