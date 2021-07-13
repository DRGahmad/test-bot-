module.exports = {
	name: 'server',
	description: 'server info',
	execute(message, args) {
		let moment =require("moment")
		let {MessageEmbed}=require("discord.js")
		let time = new Date(message.guild.createdTimestamp).toLocaleString();
		let embed = new MessageEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL())
			.addField(`:id: Server ID:`, message.guild.id)
			.addField(
				':calendar:Create on',
				`${time} 
${moment(time).fromNow()} `
			)
			.addField(`:crown: Owner:`, message.guild.owner)
			.addField(
				`👥 members:(${message.guild.members.cache.size})`,
				`${
					message.guild.members.cache.filter(
						member => member.user.presence.status !== 'offline'
					).size
				} online
${message.guild.premiumSubscriptionCount} boosts`
			)
			.addField(`channel:`, message.guild.channels.cache.size)

	message.channel.send(embed)
			},
};