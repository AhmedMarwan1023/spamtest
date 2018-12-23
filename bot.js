const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526372495985737728")
setInterval(function() {
channel.send(`**طز سبام بس هيهيهيهي**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
