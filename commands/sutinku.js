module.exports = {
    name: 'sutinku',
    description: "this is a ping command!",
    execute(message, args) {
        message.member.roles.add('819545106838716466')
        message.delete()
        message.channel.send('Tu buvai sėkmingai patvirtintas!! :tada:').then(m => m.delete({ timeout: 1000 }));

    }
}