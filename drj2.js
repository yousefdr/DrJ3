const Discord = require('discord.js');
const client = new Discord.Client();





client.on('ready', async() => {
var server = "5512846142585962498"; // ايدي السيرفر
var channel = "512846142585962504";// ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,  ')
    },305);
})
