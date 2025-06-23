export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*💗𝑯𝑶𝑳𝑨 @${m.sender.split`@`[0]}, 𝑺𝑶𝒀 𝑼𝑵 𝑩𝑶𝑻𝑺𝑰𝑻𝑶 🎀 ✨ 𝐋𝐚𝐦𝐞𝐧𝐭𝐚𝐛𝐥𝐞𝐦𝐞𝐧𝐭𝐞  𝐞𝐬𝐭𝐚𝐬 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨 𝐩𝐨𝐫  𝐦𝐚𝐧𝐝𝐚𝐫 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐚𝐥 𝐛𝐨𝐭 🤦🏻‍♀️ 𝐒𝐢 𝐠𝐮𝐬𝐭𝐚𝐬 𝐚𝐝𝐪𝐮𝐢𝐫𝐢𝐫 𝐮𝐧  𝐛𝐨𝐭𝐬𝐢𝐭𝐨 𝐩𝐚𝐫𝐚 𝐭𝐮𝐬 𝐠𝐫𝐮𝐩𝐨𝐬  𝐦𝐚𝐧𝐝𝐚 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐚𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐧𝐮́𝐦𝐞𝐫𝐨 🤓 🫶🏻 https://wa.me/+525523076336
    *`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
