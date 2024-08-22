//Bot by COLLINSMITH//


require("./all/module")
global.owner = "254752588323" 
global.namaCreator = "𝑪𝒐𝒍𝒍𝒊𝒏𝒔 𝑺𝒎𝒊𝒕𝒉" 
global.autoJoin = true 
global.antilink = true 
global.versisc = '6.0' 
global.codeInvite = "https://chat.whatsapp.com/DvlAsj0BhA5FgQS7LARxBo"
global.isLink = 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝑪𝒐𝒍𝒍𝒊𝒏𝒔 𝑺𝒎𝒊𝒕𝒉" 
global.author = "𝑪𝒐𝒍𝒍𝒊𝒏𝒔 𝑺𝒎𝒊𝒕𝒉" 
global.jumlah = "5" 
global.namabot = "𝑪𝒐𝒍𝒍𝒊𝒏𝒔 𝑺𝒎𝒊𝒕𝒉" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
