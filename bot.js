const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("515253730308915212sap")
setInterval(function() {
channel.send(`plz give me credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);