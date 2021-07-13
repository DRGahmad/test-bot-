module.exports = {
	name: 'user',
	description: 'user info',
	execute(message, args,client) {
		let moment = require('moment');
		let {MessageEmbed}=require("discord.js")
		let arg = message.content.split(" ").slice(1).join(" ")
		let user2 = message.mentions.members.first() || message.guild.members.cache.get(arg);
								if(!user2){
						let embed = new MessageEmbed()
				.setAuthor(`user:${message.member.user.username}`, message.member.user.displayAvatarURL())

				.setColor(`RED`)
				.addField(
					'Joined server:',
					new Date(message.member.joinedTimestamp).toLocaleString()
				)
				.addField(
					'Joined discord',
					new Date(message.member.user.createdTimestamp).toLocaleString()
				)
				.addField('Status:', message.member.user.presence.status, true)
				.addField(
					'Roles:',
					` <@&${message.guild.member(message.member.user)._roles.join('> <@&')}>`,
					true
				)
			.setTimestamp();

			message.channel.send(embed);

				}
				if(user2){
			let embed = new MessageEmbed()
				.setAuthor(`user:${user2.user.username}`, user2.user.displayAvatarURL())

				.setColor(`RED`)
				.addField(
					'Joined server:',
					new Date(user2.joinedTimestamp).toLocaleString()
				)
				.addField(
					'Joined discord',
					new Date(user2.user.createdTimestamp).toLocaleString()
				)
				.addField('Status:', user2.presence.status, true)
				.addField(
					'Roles:',
					` <@&${message.guild.member(user2)._roles.join('> <@&')}>`,
					true
				)
			.setTimestamp();

			message.channel.send(embed);
				} 
	},
};