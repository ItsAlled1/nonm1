module.exports = {
    name: 'istrinti',
    description: "istrina zinutes",
    async execute(message, args){
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(`Tu negali trinti žinučių!`).then(m => m.delete({ timeout: 5000 }));;
        if(!args[0]) return message.reply("Įvesk skaičių kiek nori ištrinti žinučių!").then(m => m.delete({ timeout: 5000 }));;
        if(isNaN(args[0])) return message.reply("įvesk skaičių, o ne raides!").then(m => m.delete({ timeout: 5000 }));;

        if(args[0] > 100000) return message.reply("Tu negali ištrinti daugiau negu 100,000 žinučių!").then(m => m.delete({ timeout: 5000 }));;
        if(args[0] < 1) return message.reply("Tu tur ištrinti bent 1 žinutę!").then(m => m.delete({ timeout: 5000 }));;

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}