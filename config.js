//Bot by 𝙰𝚁𝙻𝙾𝙳𝚁𝙰𝙶𝙾𝙽//


require("./all/module")
global.owner = "254702713600" 
global.namaCreator = "𝙰𝚁𝙻𝙾𝙳𝚁𝙰𝙶𝙾𝙽" 
global.autoJoin = true 
global.antilink = true 
global.versisc = '6.0' 
global.codeInvite = "https://chat.whatsapp.com/I5xIShFtrk43tfaWEmppNH"
global.isLink = 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "ARLODRAGON" 
global.author = "𝙴𝚅𝙸𝙻𝙳𝚁𝙰𝙶𝙾𝙽" 
global.jumlah = "5" 
global.namabot = "𝙴𝚅𝙸𝙻𝙳𝚁𝙰𝙶𝙾𝙽" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
