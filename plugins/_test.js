/* Imagen Search By WillZek 
- Free Codes Titan 
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🎩 Ingrese Un Texto Para Buscar Un Wallpaper');

try {
let api = `https://api.dorratz.com/v2/wallpaper-s?q=${text}`;
let response = await fetch(api);
let json = await response.json();
let res = json.result[0].getRandom();

m.react('🕑');
let txt = `> *Resultado De: ${text}*`;
let img = res;
let link = img;

await conn.sendMessage(m.chat, { image: { url: res }, caption: txt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['imagen', 'image'];

export default handler;