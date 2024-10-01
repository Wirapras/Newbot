/**
 * Script By BaraCybeer
 * Created On 20/9/2024
 * Contact Me on wa.me/6283896252486
 * Version 5.0.0 Gen 4

  SAYA ( BaraCybeer ) TIDAK BERTANGGUNG JAWAB JIKA SCRIPT INI DI SALAH GUNAKAN, DILARANG KERAS MENJUAL SCRIPT INI!!!
  KALAU MAU COLONG FITUR, MINIMAL MASUKIN NAMA GW DI TQTO KALIAN AJG

DAH ITU DARI GW AJA

TANKS TO FOR
 * 𝗕𝗔𝗥𝗔 𝗖𝗬𝗕𝗘𝗥 / Bara ( Developer )
 
Last Author : BaraCyber

Jangan Lupa Subscribe: https://youtube.com/@Baradeveloper_
*/


require("./all/global")

const func = require("./all/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
async function startSesi() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.red.bold('╭━━╮╭━━━┳━━━┳━━━╮\n┃╭╮┃┃╭━╮┃╭━╮┃╭━╮┃\n┃╰╯╰┫┃╱┃┃╰━╯┃┃╱┃┃\n┃╭━╮┃╰━╯┃╭╮╭┫╰━╯┃\n┃╰━╯┃╭━╮┃┃┃╰┫╭━╮┃\n╰━━━┻╯╱╰┻╯╰━┻╯╱╰╯\n╭━━━╮╭━━━╮\n┃╭━━╯┃╭━╮┃\n┃╰━━╮┃┃┃┃┃\n╭━━╯┣┫╰━╯┃\n╰━━━┻┻━━━╯\n\nBara999 Version 5.0\n\nCreated By : Baradeveloper\nWhatsapp : 6283896252486\nTelegram : @BaraSepuh\nSubscribe Youtube : @Baradeveloper_'))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const Bara = func.makeWASocket(connectionOptions)
if(usePairingCode && !Bara.authState.creds.registered) {
		const phoneNumber = await question('\n[ #62 ] Please enter phone number\n');
		const code = await Bara.requestPairingCode(phoneNumber.trim())
		console.log(chalk.red.bold(`Your Pairing : ${code} `))

	}
store.bind(Bara.ev)

Bara.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Bara.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Bara.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
Bara.sendMessage(`6283896252486@s.whatsapp.net`, { text: `✅ Bot succes connect

Connect Sudah Tuan @𝗕𝗔𝗥𝗔 𝗖𝗬𝗕𝗘𝗥`})
if (autoJoin) {
Bara.groupAcceptInvite(codeInvite)
}
}
})

Bara.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Bara.readMessages([m.key])
if (!Bara.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(Bara, m, store)
require("./case")(Bara, m, store)
} catch (err) {
console.log(err)
}
})

Bara.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = Bara.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Bara.public = true

Bara.ev.on('creds.update', saveCreds)
return Bara
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})