const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.on('message', message => {
    if (message.content === 'Is Hydroid Zach?') {
    	message.reply('"Hydroid#2164" is not Zach. He is the manager here. Zach is "ZachHing#4237".');
  	}
});


client.on('message', message => {
    if (message.content === 'Who made this bot?') {
    	message.reply('HyperDroid#2164 made both HyperBots.');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
