module.exports = {
	name: ':money-2:',
	description:"emoji money", 
	execute(message, args,client) {
	let {MessageEmbed}=require("discord.js")
	message.delete()
		message.channel.createWebhook(`${message.author.username}`, {
	avatar:`${message.member.user.avatarURL()}`,
})
	.then(webhook =>{
		 console.log(`Created webhook ${webhook}`)
		
webhook.send("<a:money3:866055709790961674>",{
	username: `${message.author.username}`,
	avatarURL: `${message.member.user.avatarURL()}`,
	
});
setTimeout(()=>{
webhook.delete()
},50000)
	}) 
		
	},
};