module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		let me = "Alpha 3.10"
		client.user.setActivity(me,{type:"PLAYING"})
	},
};