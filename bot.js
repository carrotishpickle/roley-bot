const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

if (message.content === '=ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong!');
}
client.login('ODE5OTYwNDk3MjYwMjAwMDQ3.YEuNuA._MamU6YmuIthY7wlCWulRjfgUd8');
