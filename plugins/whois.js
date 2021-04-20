const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const dil = require('axios');

const das = "Grup metada verisini çeker."

Asena.addCommand({ pattern: 'whois', fromMe: true, desc: das }, async (message, match) => { 

    if (message.jid.includes('-')) {
        var json = await message.client.groupMetadataMinimal(message.jid) 

        var code = await message.client.groupInviteCode(message.jid)

        var nwjson = await message.client.groupMetadata(message.jid) 

        const msg = `*Grup ID:* ${json.id} \n*Grup İsmi:* ${nwjson.subject} \n*Kurucu:* ${json.owner} \n*Grup Kodu:* ${code} \n*Grup Açıklaması:* \n\n${nwjson.desc}`

        var ppUrl = await message.client.getProfilePicture(message.jid) 

        const resim = await dil.get(ppUrl, {responseType: 'arraybuffer'})

        await message.sendMessage(
            Buffer.from(resim.data), 
            MessageType.image, 
            { caption: msg }
        );
    }
    else {
        var status = await message.client.getStatus(message.jid) 
        var usppUrl = await message.client.getProfilePicture(message.jid) 
        var usexists = await message.client.isOnWhatsApp(message.jid)
        const nwmsg = `*Kişi JID:* ${usexists.jid} \n*Kişi Durumu:* ${status.status}`
        const resimnw = await dil.get(usppUrl, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(resimnw.data), 
            MessageType.image, 
            { caption: nwmsg }
        );
    }
});
const tg = "Tag All!"
const ad = "Sessizce Herkesi Etiketler"

Asena.addCommand({ pattern: 'af', fromMe: true, desc: ad}, (async (message, match) => { 

    grup = await message.client.groupMetadata(message.jid);
    var jids = [];
    mesaj = '';
    grup['participants'].map(
        async (uye) => {
            mesaj += '@' + uye.id.split('@')[0] + ' ';
            jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            
        }
    );
    await message.client.sendMessage(message.jid,tg, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
}));
