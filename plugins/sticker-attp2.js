import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
   await m.reply(`*_${kabul} @${m.sender.split(`@`)[0]}..._*`)
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/ttp2?apikey=64333e1c050ced435defe154&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynz.webp', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['attp2 <teks>']
handler.tags = ['sticker' , 'premium']
handler.command = /^(attp2)$/i
handler.limit = true
handler.premium = true

export default handler