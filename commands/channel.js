module.exports = {
	name: 'channel',
	description: 'creating channel',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};