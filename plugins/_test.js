/* Twitterdl by WillZek 
- Free Codes Titan 
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingrese Un Texto Para Buscar Una Imagen En Google');

try {
let api = `https://api.dorratz.com/googleimagen?text=${text}`;
let response = await fetch(api);
let json = await response.json();
let arch = json.media[0];

if (!args[0].match(/x/gi)) return m.reply(m.chat, '✖️ Verifica El Link Para Poder Descargar Tu Archivo ', m, rcanal)

m.react('🕑');
let txt = `> *¡Video descargado con exito!*`;
let link = arch.url;

await conn.sendMessage(m.chat, { video: { url: link }, caption: txt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['xdl', 'twitterdl'];

export default handler;