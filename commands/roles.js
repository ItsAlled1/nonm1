module.exports = {
    name: 'roles',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Tu negali naudoti šios komandos!`).then(m => m.delete({ timeout: 5000 }));;
        const channel = '819540565661450273';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "✨ Patvirtintas");
 
        const yellowTeamEmoji = '✅';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#fffb00')
            .setTitle('Paspausk ✅, jog isitikinciau, kad nesi robotas!')
            .setThumbnail('https://cdn.discordapp.com/attachments/819540565661450273/819542068295762031/GIS-developer-types-FIG-2-e1505225536728.jpg')
            .setDescription('Pasitvirtinus pradėsi matyti visus kitus kanalus!\n\n'
                + `          ↓↓↓          `);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}