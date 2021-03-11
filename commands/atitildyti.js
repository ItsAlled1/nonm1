module.exports = {
    name: 'atitildyti',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(`Tu negali atitildyti narių!`).then(m => m.delete({ timeout: 5000 }));;
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '✨ Patvirtintas');
            let muteRole = message.guild.roles.cache.find(role => role.name === '🔇 Užtildytas');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Buvo atitildytas!`).then(m => m.delete({ timeout: 5000 }));;
        } else{
            message.channel.send('Turi butinai pažymėti narį kurį nori atitildyti!').then(m => m.delete({ timeout: 5000 }));;
        }
    }
}