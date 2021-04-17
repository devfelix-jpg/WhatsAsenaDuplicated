const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');

    Asena.addCommand({pattern: 'mutluburclar', fromMe: true, deleteCommand: false}, (async (message, match) => {
            await message.sendMessage('Bu Hafta Mutlu Olacak Burçlar;\n\n- Akrep\n-Balık\n-Aslan\n-Başak\n-Kova\n-Oğlak');
