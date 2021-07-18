module.exports = {
	name: ':money-7:',
	description: 'money emoji ',
	execute(message, args,client) {
	let {MessageEmbed}=require("discord.js")
	message.delete()
		message.channel.createWebhook(`${message.author.username}`, {
	avatar:`${message.member.user.avatarURL()}`,
})
	.then(webhook =>{
		 console.log(`Created webhook ${webhook}`)
		
webhook.send("<a:money4:866161270142009354>",{
	username: `${message.author.username}`,
	avatarURL: `${message.member.user.avatarURL()}`,
	
});
setTimeout(()=>{
webhook.delete()
},50000)
	}) 
		
	},
};