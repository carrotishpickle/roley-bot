const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

if (message.content === '=ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong!');
}
// i know there is no token here but i think you understand why
