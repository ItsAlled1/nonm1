const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: 'paleisti',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('Turi buti kokiam kanale, kad atliktum šį veiksma!').then(m => m.delete({ timeout: 5000 }));;;
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Tu negali atlikti šios komandos!').then(m => m.delete({ timeout: 5000 }));;;
        if (!permissions.has('SPEAK')) return message.channel.send('Tu negali atlikti šios komandos!').then(m => m.delete({ timeout: 5000 }));;;
        if (!args.length) return message.channel.send('Turi įrašyti muzikos pavadinimą arba jos nuoradą!').then(m => m.delete({ timeout: 5000 }));;;
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('...').then(m => m.delete({ timeout: 500 }));;;
            });
 
            await message.reply(`:thumbsup:, dabar grojama ***Tavo nurodyta nuoradą!***`)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`:thumbsup:, dabar grojama ***${video.title}***`).then(m => m.delete({ timeout: 5000 }));;
        } else {
            message.channel.send('Muzika buvo nerasta, bandyk išnaujo!').then(m => m.delete({ timeout: 5000 }));;;
        }
    }
}