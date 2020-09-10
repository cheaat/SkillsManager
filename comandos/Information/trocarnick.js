const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let name = args[0]
    let player = `https://mc-heads.net/user/${name}`
    let skin = `https://mc-heads.net/body/${name}`

    let comousar = new Discord.RichEmbed()
    .setTitle("Sintaxe Incorreta")
    .setDescription(` \n• Use: trocarnick \`<nickname>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)

    if(!name) return message.reply(comousar)
    if(!player) return message.reply("desculpe, não foi possível se registrar.")
    
    if(player){
        message.member.setNickname(name);
    
    let embed = new Discord.RichEmbed()
        .setDescription(`:incoming_envelope: Hey ${name}, seu nick foi alterado com sucesso!`)
        .setThumbnail(`${skin}`)
        .setColor(c.cor)
    
    message.channel.send(embed)
    }
}

exports.help = {
    name: "trocarnick",
    aliases: ["unregister"]
}