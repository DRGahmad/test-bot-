module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args,client) {
		message.channel.send(
			`\`\`\`
			bot ping ${client.ws.ping} memory ${(
				process.memoryUsage().heapUsed /
				1024 /
				1024
			).toFixed(2)}MP
			\`\`\``
		); 
	},
};