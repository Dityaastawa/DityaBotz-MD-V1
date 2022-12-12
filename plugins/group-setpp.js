import { webp2png } from '../lib/webp2mp4.js'
import { URL_REGEX } from '@adiwajshing/baileys'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `kirim/balas gambar dengan caption *${usedPrefix + command}*`
}
handler.help = ['setppgc','setpp']
handler.tags = ['group']

handler.command = /^setppgc|setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler