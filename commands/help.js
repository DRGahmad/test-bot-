module.exports = {
	name: 'help',
	description: 'help command',
	execute(message, args,client) {
	let {MessageEmbed} = require("discord.js")
	let arg = message.content.split(" ").slice(1).join(" ")
	var w = new MessageEmbed()
			.setTitle('General commands:')
			.addField('To open Help list', '+help')
			.addField(
				'money commands:',
				`
+start/+daily/+give/+money
 `
			)
			.addField('search commands:', `+youtube/+anime/+img/+google `)
			.addField('admin commands:', `+mute/+unmute/+kick/+ban/+role/+rule `)
			.addField(
				'members commands:',
				`+user/+server/+roles/+ping/+avatar/+Link `
			)
			.addField('Version:', `Alpha 2.3150`)
			.addField(
				'.',
				`
[join bot server](https://discord.gg/G3MAUYqwTK) | [Add bot to your server ](https://discordapp.com/oauth2/authorize?client_id=859505848216322100&scope=bot&permissions=384064) | [Bot website sooon](https://www.google.com/)
`
			)

			.setColor('RED');
		message.react('✅');
		message.channel.send(w);
	},
};