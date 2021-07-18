
  const Discord = require('discord.js')

const fs = require("fs")
const client = new Discord.Client({ws:{properties:{$browser:"Discord iOS"}}})
client.login("ODYxNzA4OTk5MDAzMjA5NzI4.YONvCw.wvxMvV9LpXFPZqvCkbbvM-I4o40")
const prefix ="+"

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
///
///
client.commands2 = new Discord.Collection();
const commandFolders2 = fs.readdirSync('./emojis');

for (const folder of commandFolders2) {
	const commandFiles2 = fs.readdirSync(`./emojis/${folder}`).filter(file => file.endsWith('.js'));
	
	for (const file of commandFiles2) {
		const command2 = require(`./emojis/${folder}/${file}`);
		console.log(command2)
		client.commands2.set(command2.name, command2);
	}
}

client.on('message', message => {
	if(message.author.bot) return;
	const args = message.content.trim().split(/ +/);
	console.log(args)
	const command = args.shift().toLowerCase();
console.log(command)
	if (!client.commands2.has(command)) return;

	
		
try {
	console.log(command)
		client.commands2.get(command).execute(message, args,client);
	} 
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	
	}
})
