import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁

*╔══ ≪ OWNER BOT ≫ ══╗*
*║* 👤 Creador : Cristhofer
*║* 📱 Numero Creador; ${asistencia}
*║* 🤑 Numero Bot : ${bot}
*║* 👻 Ig : ${md}
*║* 💻 Tiempo Activo : ${uptime}
*║* 😻 Usuario : ${taguser}
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ INFO BOT ≫ ══╗*
*║* 💫➺ _${usedPrefix}cuentasbot_
*║* 💫➺ _${usedPrefix}gruposbot_
*║* 💫➺ _${usedPrefix}estado_
*║* 💫➺ _${usedPrefix}infobot_
*║* 💫➺ _${usedPrefix}comprarbot_
*║* 💫➺ _${usedPrefix}comprarbot2_
*║* 💫➺ _${usedPrefix}creador_
*║* 💫➺ _${usedPrefix}velocidad_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ REGLAS , LISTA , FICHA ≫ ══╗*
*║* 💻➺ _${usedPrefix}Fem4_
*║* 💻➺ _${usedPrefix}Fem6_
*║* 💻➺ _${usedPrefix}FemInterna4_
*║* 💻➺ _${usedPrefix}FemInterna6_
*║* 💻➺ _${usedPrefix}Masc4_
*║* 💻➺ _${usedPrefix}Masc6_
*║* 💻➺ _${usedPrefix}MascInterna4_
*║* 💻➺ _${usedPrefix}MascInterna6_
*║* 💻➺ _${usedPrefix}Mixto4_
*║* 💻➺ _${usedPrefix}Mixto6_
*║* 💻➺ _${usedPrefix}MixtoInterna4_
*║* 💻➺ _${usedPrefix}MixtoInterna6_
*║* 💻➺ _${usedPrefix}ReglasApos_
*║* 💻➺ _${usedPrefix}Ficha / Formulario Pa Entrar A Team_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ SPAM X EDITS ≫ ══╗*
*║* 👤➺ _${usedPrefix}SpamApk / WhatsApp_
*║* 👤➺ _${usedPrefix}SpamComu / Comunidades_
*║* 👤➺ _${usedPrefix}ApkEdits_
*║* 👤➺ _${usedPrefix}DriveEdits / Recursos_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ MENUS SECUNDARIOS ≫ ══╗*
*║* 🎡➺ _${usedPrefix}MenuJuegos_
*║* 🚀➺ _${usedPrefix}MenuDescargas_
*║* ⚙️➺ _${usedPrefix}MenuAjustes_
*║* 🌐➺ _${usedPrefix}MenuGrupos_
*║* 🧩➺ _${usedPrefix}MenuAnime_
*║* 🔞➺ _${usedPrefix}hornymenu_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ ANONIMO CHAT ≫ ══╗*
*║* 👤➺ _${usedPrefix}chatanonimo | anonimochat_
*║* 👤➺ _${usedPrefix}anonimoch_
*║* 👤➺ _${usedPrefix}start_
*║* 👤➺ _${usedPrefix}next_
*║* 👤➺ _${usedPrefix}leave_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ PAREJA ≫ ══╗*
*║* ❤️➺ _${usedPrefix}listaparejas | listship_
*║* ❤️➺ _${usedPrefix}mipareja | mylove_
*║* ❤️➺ _${usedPrefix}pareja | couple *@tag*_
*║* ❤️➺ _${usedPrefix}aceptar | accept *@tag*_
*║* ❤️➺ _${usedPrefix}rechazar | decline *@tag*_
*║* ❤️➺ _${usedPrefix}terminar | finish *@tag*_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ CONVERTIDOR ≫ ══╗*
*║* 🛰️➺ _${usedPrefix}toimg | img | jpg *sticker*_
*║* 🛰️➺ _${usedPrefix}toanime | jadianime *foto*_
*║* 🛰️➺ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
*║* 🛰️➺ _${usedPrefix}tovn | vn *video o audio*_
*║* 🛰️➺ _${usedPrefix}tovideo *audio*_
*║* 🛰️➺ _${usedPrefix}tourl *video, imagen*_
*║* 🛰️➺ _${usedPrefix}toenlace  *video, imagen o audio*_
*║* 🛰️➺ _${usedPrefix}tts es *texto*_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ LOGOS ≫ ══╗*
*║* 🔆 _${usedPrefix}logos *efecto texto*_
*║* 🌅 _${usedPrefix}menulogos2_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ EFECTOS ≫ ══╗*
*║* ⛺ _${usedPrefix}simpcard *@tag*_
*║* ⛺ _${usedPrefix}hornycard *@tag*_
*║* ⛺ _${usedPrefix}lolice *@tag*_
*║* ⛺ _${usedPrefix}ytcomment *texto*_
*║* ⛺ _${usedPrefix}itssostupid_
*║* ⛺ _${usedPrefix}pixelar_
*║* ⛺ _${usedPrefix}blur_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ MOD AUDIOS ≫ ══╗*
*║* 🧰 _${usedPrefix}bass_
*║* 🧰 _${usedPrefix}blown_
*║* 🧰 _${usedPrefix}deep_
*║* 🧰 _${usedPrefix}earrape_
*║* 🧰 _${usedPrefix}fast_
*║* 🧰 _${usedPrefix}fat_
*║* 🧰 _${usedPrefix}nightcore_
*║* 🧰 _${usedPrefix}reverse_
*║* 🧰 _${usedPrefix}robot_
*║* 🧰 _${usedPrefix}slow_
*║* 🧰 _${usedPrefix}smooth_
*║* 🧰 _${usedPrefix}tupai_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ BUSQUEDAS ≫ ══╗*
*║* 🔍➺ _${usedPrefix}animeinfo *texto*_
*║* 🔍➺ _${usedPrefix}mangainfo *texto*_
*║* 🔍➺ _${usedPrefix}google *texto*_
*║* 🔍➺ _${usedPrefix}googlelyrics *texto*_
*║* 🔍➺ _${usedPrefix}letra | lirik *texto*_
*║* 🔍➺ _${usedPrefix}ytsearch | yts *texto*_
*║* 🔍➺ _${usedPrefix}wiki | wikipedia *texto*_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ HERRAMIENTAS ≫ ══╗*
*║* 🛠️ _${usedPrefix}afk *motivo*_
*║* 🛠️ _${usedPrefix}acortar *url*_
*║* 🛠️ _${usedPrefix}calc *operacion math*_
*║* 🛠️ _${usedPrefix}del *respondre a mensaje del Bot*_
*║* 🛠️ _${usedPrefix}qrcode *texto*_
*║* 🛠️ _${usedPrefix}readmore *texto1|texto2*_
*║* 🛠️ _${usedPrefix}spamwa *numero|texto|cantidad*_
*║* 🛠️ _${usedPrefix}styletext *texto*_
*║* 🛠️ _${usedPrefix}traducir *texto*_
*║* 🛠️ _${usedPrefix}morse codificar *texto*_
*║* 🛠️ _${usedPrefix}morse decodificar *morse*_
*║* 🛠️ _${usedPrefix}encuesta | poll *Motivo*_
*║* 🛠️ _${usedPrefix}horario_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ FUNCION RPG ≫ ══╗*
*║* ⚗️➺ _${usedPrefix}botemporal *enlace* *cantidad*_
*║* ⚗️➺ _${usedPrefix}addbot *enlace* *cantidad*_
*║* ⚗️➺ _${usedPrefix}pase premium_
*║* ⚗️➺ _${usedPrefix}pass premium_
*║* ⚗️➺ _${usedPrefix}listapremium | listprem_
*║* ⚗️➺ _${usedPrefix}transfer *tipo cantidad @tag*_
*║* ⚗️➺ _${usedPrefix}dar *tipo cantidad @tag*_
*║* ⚗️➺ _${usedPrefix}enviar *tipo cantidad @tag*_
*║* ⚗️➺ _${usedPrefix}balance_
*║* ⚗️➺ _${usedPrefix}cartera | wallet_
*║* ⚗️➺ _${usedPrefix}experiencia | exp_
*║* ⚗️➺ _${usedPrefix}top | lb | leaderboard_
*║* ⚗️➺ _${usedPrefix}rol | rango_
*║* ⚗️➺ _${usedPrefix}inventario | inventory_
*║* ⚗️➺ _${usedPrefix}aventura | adventure_
*║* ⚗️➺ _${usedPrefix}caza | cazar | hunt_
*║* ⚗️➺ _${usedPrefix}pescar | fishing_
*║* ⚗️➺ _${usedPrefix}animales_
*║* ⚗️➺ _${usedPrefix}alimentos_
*║* ⚗️➺ _${usedPrefix}curar | heal_
*║* ⚗️➺ _${usedPrefix}buy_
*║* ⚗️➺ _${usedPrefix}sell_
*║* ⚗️➺ _${usedPrefix}verificar | registrar_
*║* ⚗️➺ _${usedPrefix}perfil | profile_
*║* ⚗️➺ _${usedPrefix}myns_
*║* ⚗️➺ _${usedPrefix}unreg *numero de serie*_
*║* ⚗️➺ _${usedPrefix}minardiamantes | minargemas_
*║* ⚗️➺ _${usedPrefix}minargatacoins | minarcoins_
*║* ⚗️➺ _${usedPrefix}minarexperiencia | minarexp_
*║* ⚗️➺ _${usedPrefix}minar *:* minar2 *:* minar3_
*║* ⚗️➺ _${usedPrefix}reclamar | regalo | claim_
*║* ⚗️➺ _${usedPrefix}cadahora | hourly_
*║* ⚗️➺ _${usedPrefix}cadasemana | semanal | weekly_
*║* ⚗️➺ _${usedPrefix}cadames | mes | monthly_
*║* ⚗️➺ _${usedPrefix}cofre | abrircofre | coffer_
*║* ⚗️➺ _${usedPrefix}trabajar | work_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ TOPS ≫ ══╗*
*║* 🏆➺ _${usedPrefix}tops_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ STICKERS X FILTROS ≫ ══╗*
*║* 🎐 _${usedPrefix}sticker | s *imagen o video*_
*║* 🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
*║* 🎐 _${usedPrefix}emojimix *😺+😆*_
*║* 🎐 _${usedPrefix}scircle | círculo *imagen*_
*║* 🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
*║* 🎐 _${usedPrefix}attp *texto*_
*║* 🎐 _${usedPrefix}attp2 *texto*_
*║* 🎐 _${usedPrefix}ttp *texto*_
*║* 🎐 _${usedPrefix}ttp2 *texto*_
*║* 🎐 _${usedPrefix}ttp3 *texto*_
*║* 🎐 _${usedPrefix}ttp4 *texto*_
*║* 🎐 _${usedPrefix}ttp5 *texto*_
*║* 🎐 _${usedPrefix}ttp6 *texto*_
*║* 🎐 _${usedPrefix}dado_
*║* 🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
*║* 🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
*║* 🎐 _${usedPrefix}cs *:* cs2_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ MOD STICKERS ≫ ══╗*
*║* 💡 _${usedPrefix}wm *packname|author*_
*║* 💡 _${usedPrefix}wm *texto1|texto2*_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ STICKERS DINAMICOS ≫ ══╗*
*║* ⛱️ _${usedPrefix}palmaditas | pat *@tag*_
*║* ⛱️ _${usedPrefix}bofetada | slap *@tag*_
*║* ⛱️ _${usedPrefix}golpear *@tag*_
*║* ⛱️ _${usedPrefix}besar | kiss *@tag*_
*║* ⛱️ _${usedPrefix}alimentar | food *@tag*_
*╚══ ≪ •❈• ≫ ══╝*

*╔══ ≪ FUNCIONES OWNERS ≫ ══╗*
*║* 💎➺ _${usedPrefix}join *enlace*_
*║* 💎➺ _${usedPrefix}unete *enlace*_
*║* 💎➺ _${usedPrefix}dardiamantes *cantidad*_
*║* 💎➺ _${usedPrefix}darxp *cantidad*_
*║* 💎➺ _${usedPrefix}dargatacoins *cantidad*_
*║* 💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}idioma | language_
*║* 💎➺ _${usedPrefix}cajafuerte_
*║* 💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
*║* 💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
*║* 💎➺ _${usedPrefix}comunicarpv *texto*_
*║* 💎➺ _${usedPrefix}broadcastgc *texto*_
*║* 💎➺ _${usedPrefix}comunicargrupos *texto*_
*║* 💎➺ _${usedPrefix}borrartmp | cleartmp_
*║* 💎➺ _${usedPrefix}delexp *@tag*_
*║* 💎➺ _${usedPrefix}deloptimuscoins *@tag*_
*║* 💎➺ _${usedPrefix}deldiamantes *@tag*_
*║* 💎➺ _${usedPrefix}reiniciar | restart_
*║* 💎➺ _${usedPrefix}ctualizar | update_
*║* 💎➺ _${usedPrefix}addprem | +prem *@tag*_
*║* 💎➺ _${usedPrefix}delprem | -prem *@tag*_
*║* 💎➺ _${usedPrefix}listapremium | listprem_
*║* 💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadircoins *@tag cantidad*_
*╚══ ≪ •❈• ≫ ══╝*`.trim()
conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩', previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, tiktok].getRandom()}}})
	 
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
