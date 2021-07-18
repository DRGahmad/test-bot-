module.exports = {
    name: 'voiceStateUpdate',
    once: true,
    execute(oldState, newState,client) {
       
    if (!newState.channel) console.log('leave')  
         if(newState.channel) console.log("test")
        } 
};  
