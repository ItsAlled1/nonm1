const ms = require('ms');
module.exports = {
    name: 'uztildyti',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(`Tu negali užtildyti narių!`).then(m => m.delete({ timeout: 5000 }));;
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === '✨ Patvirtintas');
            let muteRole = message.guild.roles.cache.find(role => role.name === '🔇 Užtildytas');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}>, buvo užtildytas!`).then(m => m.delete({ timeout: 5000 }));;
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}>, buvo užtildytas laikui: ${ms(ms(args[1]))}!`).then(m => m.delete({ timeout: 5000 }));;
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Turi pažymėti narį kurį nori užtildyti!').then(m => m.delete({ timeout: 5000 }));;
        }
    }
}