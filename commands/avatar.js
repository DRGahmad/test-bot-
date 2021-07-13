module.exports = {
	name: 'avatar',
	description: 'avatar',
	execute(message, args,Discord) {
		let {MessageEmbed} =require("discord.js")
		let arg = message.content.split(" ").slice(1).join(" ")
		let users = message.mentions.users.first()||message.guild.members.cache.get(arg).user
		console.log(users)
		if(!users){
		let embed = new MessageEmbed()	
		.setImage(message.member.user.avatarURL({size:1024,dynamic:true}))
		.setColor("RED")
		.setAuthor(message.member.user.username,message.member.user.avatarURL())
	message.channel.send(embed)	
		}
		 if(users){
				let embed = new MessageEmbed()
.setImage(users.avatarURL({size:1024,dynamic:true}))
.setColor("RED")
.setAuthor(users.username,users.avatarURL({size:1024,dynamic:true}))
message.channel.send(embed)
} 
	},
};