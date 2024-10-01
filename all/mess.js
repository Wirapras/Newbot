require("./global")

const mess = {
   wait: "Tunggu Lagi Proses Kontol😂",
   success: "Sukses Full Veri-veri good😘",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*`[ QUERY ]` - Teks Nya Mana Kak?*",
       link: "*`[ NEED ]` - Link Nya Mana Kak?*",
   },
   error: {
       fitur: "*`[ Error ]` - Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki*",
   },
   only: {
       group: "`Kasihan Gabisa Aksess😂`, *Fitur Ini Cuma Bisa Di Akses Di Dalam Group*",
       private: "`Kasihan Gabisa Aksess😂`, *Fitur Ini Cuma Bisa Di Akses Di Privat Chat*",
       owner: "`Kasihan Gabisa Aksess😂`, *Fitur Ini Cuma Bisa Di Akses Oleh 𝗕𝗔𝗥𝗔 𝗖𝗬𝗕𝗘𝗥*",
       admin: "`Kasihan Gabisa Aksess😂`, *Fitur Ini Cuma Bisa Di Akses Oleh Aetmin*",
       badmin: "`Kasihan Gabisa Aksess😂`, *Mangkanya Bot 𝗕𝗔𝗥𝗔 𝗖𝗬𝗕𝗘𝗥 Jadiin Aetmin*",
       premium: "`Kasihan Gabisa Aksess😂`, *Fitur Ini Cuma Bisa Di Akses Oleh Member Prem 𝗕𝗔𝗥𝗔 𝗖𝗬𝗕𝗘𝗥*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})