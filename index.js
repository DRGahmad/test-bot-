
  const Discord = require('discord.js')

const fs = require("fs")
const client = new Discord.Client({ws:{properties:{$browser:"Discord iOS"}}})
client.login("ODYxNzA4OTk5MDAzMjA5NzI4.YONvCw.wvxMvV9LpXFPZqvCkbbvM-I4o40")
const prefix ="+"
client.on("ready",()=>{
	let se = "Alpha 2.3150"
	client.user.setActivity(se,{type:"PLAYING"}).then(av=>{
		console.log(av.activities[0].name)
	})
})

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args,client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
client.commands2 = new Discord.Collection();

const commandFiles2 = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles2) {
	const command2 = require(`./events/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands2.set(command2.name, command2);
}
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands2.has(command)) return;

	try {
		client.commands2.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});