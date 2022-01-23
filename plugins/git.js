const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/aO8uCtQ.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*spirit  bot created by Spirit*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/16052772640

sᴘɪʀɪᴛ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/F3adhxvYpd3KzVptzDxhC4

ɢɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/SPlRlT-YT/spirit-bot

ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/SPlRlT-YT/spirit-bot/tree/master/uploads

sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/SPlRlT-YT/spirit-bot/tree/master/sticker

ᴄʜᴀɴɴᴇɪᴄʜ : https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA 

💝sᴘɪʀɪᴛ ʙᴏᴛ💝
`}) 

}));
