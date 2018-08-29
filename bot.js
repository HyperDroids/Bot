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
    	message.reply('No, @HyperDroid#2164 is the manager here. Zach is @Zach#4237');
  	}
});


client.on('message', message => {
    if (message.content === 'Who made this bot?') {
    	message.reply('@HyperDroid#2164, of course!');
  	}
});

//long comands 
mybot.on("message", function(message){

            if( message.content === "!my_avatar" ){

        var usersAvatar = message.sender.avatarURL;

        if(usersAvatar){
            // user has an avatar

            mybot.reply(message, "your avatar can be found at " + usersAvatar);

        }else{
            // user doesn't have an avatar

            mybot.reply(message, "you don't have an avatar!");
        }

            }

} );







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
