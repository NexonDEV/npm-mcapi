const sha1 = require("sha1")
const axios = require("axios")

module.exports = async function (ip) {
    let hash1 = sha1(ip)
    let ipSplitted = ip.split('.')
    let hash2 = sha1(`*.${ipSplitted[ipSplitted.length - 2]}.${ipSplitted[ipSplitted.length - 1]}`)

    let isBlocked = false

    await axios.get(`https://sessionserver.mojang.com/blockedservers`).then( res => {
        let blockedList = res.data.split('\n')

        if (blockedList.includes(hash1) || blockedList.includes(hash2)) isBlocked = true
    }).catch(err => console.log)

    return isBlocked
}