const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tete/i.test(m.quoted.text)) return !0
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    if (!(id in conn.tekateki)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.data.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += conn.tekateki[id][2]
            m.reply(`*Benar!*\n+${conn.tekateki[id][2]} XP`)
            clearTimeout(conn.tekateki[id][3])
            delete conn.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.data.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
