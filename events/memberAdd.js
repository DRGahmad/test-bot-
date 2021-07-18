module.exports = {
	name: 'guildMemberAdd',
	once: true,
	execute(member) {
		let channel = member.guild.channels.cache.find(x=>x.name =="chat")
			channel.send(`welcome ${member.user.username}`)
			},
};