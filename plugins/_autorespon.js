let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return // Yang diblock ga direspon
    if (m.chat.endsWith('broadcast')) return
    let setting = global.db.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.reply(m.chat, `┌〔 Undang Bot ke Grup 〕
│ 
├ 7 Hari / Rp 10.000
├ 30 Hari / Rp 30.000
│ 
├ Hubungi @${global.owner[0]}
└────
`.trim(), m, { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // Order
    let reg = /(Om Ane Mau Order Web P)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.replyLIST HARGA\n_wa\'🌐YakkoXcode🌐\n_wa\🔰OPEN KEBUTUHAN HOSTING\n_wa\====================================\n_wa\HARGA MWHM\n_wa\====================================\n_wa\📂MWHM MINI : 80K\n_wa\📂MWHM MEDIUM : 100K\n_wa\📂MWHM EXTRA : 130K\n_wa\📂MWHM SUPER : 150K\n_wa\====================================\n_wa\HARGA WHM :\n_wa\====================================\n_wa\📂WHM MINI : 30K\n_wa\📂WHM MEDIUM : 40K\n_wa\📂WHM EXTRA : 50K\n_wa\📂WHM SUPER : 60K\n_wa\====================================\n_wa\HARGA WEB P:\n_wa\====================================\n_wa\📂WEB 0X GARANSI : 10K\n_wa\📂WEB 1X GARANSI : 15K\n_wa\📂WEB 2X GARANSI : 20K\n_wa\📂WEB 3X GARANSI : 25K\n_wa\====================================\n_wa\NOTE : TIDAK MENERIMA FULL GARANSI\n_wa\SERVER :   Lord BabyBoySgz🌐_*\n_wa\SEND EMAIL : WUSHHH🚀 _*\n_wa\AUTO SLL : GEMBOK IJO🔒_*\n_wa\NOTE : NO DELAY - DELAY⚡\n_wa\DANA KURANG : BISA DP ASALKAN LUNAS⚠️\n_wa\====================================\n_wa\Spesifikasi Server :\n_wa\Ram :\n_wa\8GB 4Core \n_wa\====================================\n_wa\💰PAYMENT : DANA | XL | IM3 | GOPAY\n_wa\====================================`)
    }
    
        // P
    let reg = /(P)/i
    let isP = reg.exec(m.text)
    if (isP && !m.fromMe) {
        m.replyLIST HARGA\n_wa\'🌐YakkoXcode🌐\n_wa\🔰OPEN KEBUTUHAN HOSTING\n_wa\====================================\n_wa\HARGA MWHM\n_wa\====================================\n_wa\📂MWHM MINI : 80K\n_wa\📂MWHM MEDIUM : 100K\n_wa\📂MWHM EXTRA : 130K\n_wa\📂MWHM SUPER : 150K\n_wa\====================================\n_wa\HARGA WHM :\n_wa\====================================\n_wa\📂WHM MINI : 30K\n_wa\📂WHM MEDIUM : 40K\n_wa\📂WHM EXTRA : 50K\n_wa\📂WHM SUPER : 60K\n_wa\====================================\n_wa\HARGA WEB P:\n_wa\====================================\n_wa\📂WEB 0X GARANSI : 10K\n_wa\📂WEB 1X GARANSI : 15K\n_wa\📂WEB 2X GARANSI : 20K\n_wa\📂WEB 3X GARANSI : 25K\n_wa\====================================\n_wa\NOTE : TIDAK MENERIMA FULL GARANSI\n_wa\SERVER :   Lord BabyBoySgz🌐_*\n_wa\SEND EMAIL : WUSHHH🚀 _*\n_wa\AUTO SLL : GEMBOK IJO🔒_*\n_wa\NOTE : NO DELAY - DELAY⚡\n_wa\DANA KURANG : BISA DP ASALKAN LUNAS⚠️\n_wa\====================================\n_wa\Spesifikasi Server :\n_wa\Ram :\n_wa\8GB 4Core \n_wa\====================================\n_wa\💰PAYMENT : DANA | XL | IM3 | GOPAY\n_wa\====================================`)
    }

    // List
    let reg = /(list)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.replyLIST HARGA\n_wa\'🌐YakkoXcode🌐\n_wa\🔰OPEN KEBUTUHAN HOSTING\n_wa\====================================\n_wa\HARGA MWHM\n_wa\====================================\n_wa\📂MWHM MINI : 80K\n_wa\📂MWHM MEDIUM : 100K\n_wa\📂MWHM EXTRA : 130K\n_wa\📂MWHM SUPER : 150K\n_wa\====================================\n_wa\HARGA WHM :\n_wa\====================================\n_wa\📂WHM MINI : 30K\n_wa\📂WHM MEDIUM : 40K\n_wa\📂WHM EXTRA : 50K\n_wa\📂WHM SUPER : 60K\n_wa\====================================\n_wa\HARGA WEB P:\n_wa\====================================\n_wa\📂WEB 0X GARANSI : 10K\n_wa\📂WEB 1X GARANSI : 15K\n_wa\📂WEB 2X GARANSI : 20K\n_wa\📂WEB 3X GARANSI : 25K\n_wa\====================================\n_wa\NOTE : TIDAK MENERIMA FULL GARANSI\n_wa\SERVER :   Lord BabyBoySgz🌐_*\n_wa\SEND EMAIL : WUSHHH🚀 _*\n_wa\AUTO SLL : GEMBOK IJO🔒_*\n_wa\NOTE : NO DELAY - DELAY⚡\n_wa\DANA KURANG : BISA DP ASALKAN LUNAS⚠️\n_wa\====================================\n_wa\Spesifikasi Server :\n_wa\Ram :\n_wa\8GB 4Core \n_wa\====================================\n_wa\💰PAYMENT : DANA | XL | IM3 | GOPAY\n_wa\====================================`)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', false, false, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : 'Publik'}`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
