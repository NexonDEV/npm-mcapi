const axios = require("axios")

module.exports = async function (ip) {
    let info = {}

    await axios.get(`https://api.mcsrvstat.us/2/${ip}`).then( res => {
        info = res.data
    }).catch(err => console.log)

    return info
}