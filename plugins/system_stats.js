/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'hosgeldin', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/hosgeldin.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "```BFE'ye Hoşgeldin!```\n\n*Kurallar:* ```Saygısızlık Yapma Yeter Dostum```\n*Bot Geliştiricisi:* ```DevFelix```" }
        )
    }
    else if (Config.ALIVEMSG == 'hosgeldiiiin') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/welcome.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "```BFE'ye Hoşgeldin!```\n\n*Kurallar:* ```Saygısızlık Yapma Yeter Dostum```\n*Bot Geliştiricisi:* ```DevFelix```" }
        )
    }
    else if (Config.ALIVEMSG == 'xtr') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/ezgif-7-0bd4f49fd28c.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "```Bu Kalp Birtek Sana Atıyor 🖤```" }
        )
    }

    else if (Config.ALIVEMSG == 'sayex') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/4_5935988232951957622.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "```AsenaBlack Sayex İçin Çalışıyor!" }
        )
    }
    else {
        await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsAsena*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
