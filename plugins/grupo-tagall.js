let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `📄 *MENSAJE:* ${pesan}`
let teks = `╭━〔 *𝑯𝑶𝑳𝑨 𝑻𝑬 𝑬𝑺𝑻𝑨𝑵 𝑯𝑨𝑩𝑳𝑨𝑵𝑫𝑶 𝑨𝑪𝑨 𝑬𝑳 𝑼𝑵𝑰𝑪𝑶 𝑩𝑶𝑻 𝑺𝑶𝒀 𝒀𝑶* 〕━⬣\n${oi}\n\n`
for (let mem of participants) {
teks += `┃🐠 @${mem.id.split('@')[0]}\n`}
teks += `┃
╰━━━━━[ *𝑭𝑰𝑺𝑯 𝑩𝑶𝑻* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|niñas|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
