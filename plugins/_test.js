// Twitterdl by WillZek 

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('⬇️ Ingresa Un Link De Twitter Para Poder Mandar Su Video');

try {
let api = `https://api.dorratz.com/xdown?url=${args[0]}`;
let response = await fetch(api);
let json = await response.json();
let arch = json.media[0];

if (!args[0].match(/x/gi)) return m.reply(m.chat, '✖️ Verifica El Link Para Poder Descargar Tu Archivo ', m, rcanal)

m.react('🕑');
m.reply(m.chat, '✨ *Espere Un Momento Estamos Enviando Su Video*\n> El Tiempo Puede Variar Depende El Peso Del Vídeo', m, rcanal);

let txt = `> *¡Video Descargado Con Éxito!*\n*Likes:* ${arch.likes}`;
let link = arch.url;

await conn.sendMessage(m.chat, { video: { url: link }, caption: txt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['medtest'];

export default handler;