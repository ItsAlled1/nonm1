module.exports = {
    name: 'ismesti',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`Tu negali išmesti narių!`).then(m => m.delete({ timeout: 5000 }));;
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("Narys buvo sėkmingai išmestas").then(m => m.delete({ timeout: 5000 }));;
        }else{
            message.channel.send(`Tu turi pažymėti narį kurį nori išmesti!`).then(m => m.delete({ timeout: 5000 }));;
        }
    }
}