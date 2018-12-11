const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("520359535949643789")
setInterval(function() {
channel.send(`ahmed ahmed ahmed ahmed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);