module.exports = {
    name: 'roles2',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '820020543750144040';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "🔞17-20+");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "🔞13-16");
 
        const yellowTeamEmoji = '❗';
        const blueTeamEmoji = '🔞';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#7605ff')
            .setTitle('Klausimanija')
            .setThumbnail('https://cdn.discordapp.com/attachments/808331179781652500/819614924221055076/20210311_185636.gif')
            .setDescription('Kiek tau metų :face_with_monocle:, Pasirink !\n\n'
                + `${yellowTeamEmoji}Jei tau 17-20+\n`
                + `${blueTeamEmoji} Jei tau 13-16`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
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
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   