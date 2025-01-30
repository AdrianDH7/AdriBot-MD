/* Github Search By WillZek 
- Free Codes Titan  
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

// [🔎] 𝗚𝗶𝘁𝗵𝘂𝗯 𝗦𝗲𝗮𝗿𝗰𝗵

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(m.chat, '🍭 Ingresa Un Nombre De Repositorio o De Usuario De Github', m, rcanal);

try {
let api = `https://dark-core-api.vercel.app/api/search/github?key=api&text=${text}`;

let response = await fetch(api);
let json = await response.json();
let result = json.results[0];

let txt = `*Nombre:* ${result.name}\n*Owner:* ${result.creator}\n*Estrellas:* ${result.stars}\n*Bifurcaciones:* ${result.forks}\n*Descripcion:* ${result.description}\n*Creado:* ${result.createdAt}\n*Link:* ${result.cloneUrl}`;

let img = 'https://cloud.dorratz.com/files/669d45d70d27913f08db78953c11903b';

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (error) {
console.error(error)
m.reply(`Error: ${error.message}`);
m.react('✖️');
 }
};

handler.command = ['githubsearch', 'gbsearch'];

export default handler;