module.exports = {
    name: 'iseiti',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        message.delete
        if(!voiceChannel) return message.channel.send("Tu turi būt prisijungęs į kanalą jei nori jog aš išeičiau!").then(m => m.delete({ timeout: 5000 }));;;
        await voiceChannel.leave();
        await message.channel.send(':thumbsup:').then(m => m.delete({ timeout: 5000 }));;
 
    }
}