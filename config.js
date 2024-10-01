require("./all/module")

//=================================================//

//GLOBAL PAYMENT
global.storename = "𝗕𝗔𝗥𝗔 𝗖𝗬𝗕𝗘𝗥"
global.dana = "6283896252486"
global.gopay = false
global.ovo = false
global.qris = "https://l.top4top.io/p_31903ydpr1.jpg"
//=================================================//

// GLOBAL SETTING

global.owner = "6285283765207" //ganti nomer lu biar bisa di gunakan botnya
global.namabot = "𝗕𝗔𝗥𝗔𝟵𝟵𝟵 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟱.𝟬"
global.nomorbot = "6283896252486"
global.namaCreator = "𝗕𝗔𝗥𝗔𝟵𝟵𝟵 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟱.𝟬"
global.linkyt = "https://youtube.com/@Baradeveloper_"
//=================================================//
global.autoJoin = false
//NOT CHANGE / JANGAN GANTI
global.antilink = false
//NOT CHANGE / JANGAN GANTI
global.versisc = '5.0'
//NOT CHANGE / JANGAN GANTI
//=================================================//
global.delayjpm = 5500
// JGN GANTI NANTI ERROR
//=================================================//

// SETTING PANEL
global.apikey = '' //Plta
global.capikey = '' //Pltc
global.domain = 'https://'
global.eggsnya = '15'
global.location = '1'

//=================================================//

//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://b.top4top.io/p_3189wqnd31.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VafZAPi2ER6id5fxrC24'
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.packname = "BaraCyber"
global.author = "BaraCyber"
global.jumlah = "5"
//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})