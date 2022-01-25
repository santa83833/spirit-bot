const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╗*\n           \n*⚜═ᴀʙᴜ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 sᴘɪʀɪᴛ-sᴘɪʀɪᴛᴛʜᴇsʜ - https://api.whatsapp.com/send?phone=12046745367text=Please%20add%20sᴘɪʀɪᴛsᴇʀ%20bot%20ɢʀᴏᴜᴘ%20💝*\n*            *\n*╚══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╝*\n\n*▷Creator: sᴘɪʀɪᴛ sᴇʀ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═sᴘɪʀɪᴛ-sᴇʀ ᴏᴡɴᴇʀ sᴘɪʀɪᴛ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-sᴘɪʀɪᴛsᴇʀ═🌟*\n\n*🔅https://github.com/SPlRlT-YT/spirit-bot*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╗*\n           \n*⚜═ᴀʙᴜ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 sᴘɪʀɪᴛ- - https://api.whatsapp.com/send?phone=120467453678&text=Please%20add%20sᴘɪʀɪᴛsᴇʀ%20bot%20ɢʀᴏᴜᴘ%20💝*\n*            *\n*╚══■□💙ᴀʙᴜ-sᴇʀ💙■□══╝*\n\n*▷Cʀᴇᴀᴛᴇʀ: Aʙᴜ-Jᴀsɪʟ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═sᴘɪʀɪᴛ-sᴇʀ ᴏᴡɴᴇʀ sᴘɪʀɪᴛ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-ᴊᴀsɪʟ.ᴍᴜʜᴀᴍᴍᴇᴅ═🌟*\n\n*🔅https://github.com/SPlRlT-YT/spirit-bot*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
