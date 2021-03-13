const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = 'n/';
 
const fs = require('fs');


 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
    const embed = new Discord.MessageEmbed

}
 
 
client.once('ready', () => {
    console.log('Oh yes daddy!');
    let statuses = [
        "   dsc.gg/nonm",
        "  Reklamuosi?!? BAN!",
        "  Esi laukiamas visada!",
        "  NoNm"
        
    
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"STREAMING"})
    
        }, 3000)
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'sutinku'){
        client.commands.get('sutinku').execute(message, args);
    } else if(command === 'ismesti'){
        client.commands.get('ismesti').execute(message, args);
    } else if(command === 'uztildyti'){
        client.commands.get('uztildyti').execute(message, args);
    } else if(command === 'atitildyti'){
        client.commands.get('atitildyti').execute(message, args);
    } else if(command === 'taisykles'){
        client.commands.get('taisykles').execute(message, args);
    } else if(command === 'roles'){
        client.commands.get('roles').execute(message, args, Discord, client);
    } else if(command === 'istrinti'){
        client.commands.get('istrinti').execute(message, args);
    } else if(command === 'paleisti'){
        client.commands.get('paleisti').execute(message, args);
    } else if(command === 'iseiti'){
        client.commands.get('iseiti').execute(message, args);
    } else if(command === 'say'){
        client.commands.get('say').execute(bot, message, args);
    } else if(command === 'roles2'){
        client.commands.get('roles2').execute(message, args, Discord, client);
    } else if(command === 'roles3'){
        client.commands.get('roles3').execute(message, args, Discord, client);
    }

    if (message.content.toLowerCase() === 'n/pagalba') {
        const embed = new Discord.MessageEmbed()
          .setTitle('Pagalba')
        .setURL('https://dsc.gg/nonm')
        .setAuthor('')
        .setDescription('Dėl didesnės pagalbos kreipkites pas administracija!')
        .setColor('#7605ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/808331179781652500/819614924221055076/20210311_185636.gif')
        .setImage('https://imgur.comffGxVIL')
        .setTimestamp()
        .setFooter('NoNm')
        .addFields({
          name: 'Komandos :computer:',
          value: 'n/paleisti, n/iseiti, n/pagalba, n/ap, n/',
          inline: true
        });
        

        message.channel.send(embed);
    
};
if (message.content.toLowerCase() === 'n/ap') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Administracijos pagalba')
    .setURL('https://dsc.gg/nonm')
    .setAuthor('')
    .setDescription('Dėl didesnes informacijos kreipkites į administracija, ar savininkus!')
    .setColor('#7605ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/808331179781652500/819614924221055076/20210311_185636.gif')
    .setImage('https://imgur.comffGxVIL')
    .setTimestamp()
    .setFooter('NoNm')
    .addFields({
      name: 'Administracijos komandos :exclamation:',
      value: 'n/uztildyti, n/atitildyti, n/ismesti, n/ban, n/istrinti.',
      inline: false
    
  });

    message.channel.send(embed);

}

});

 
client.login('ODE5NTQxNDIzOTUwNTI4NTcy.YEoHbQ.RrgPnjCush7bZLIvQUKnP6j5oZU');