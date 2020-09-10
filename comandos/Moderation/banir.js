const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
    return message.reply(`você não tem permissão!`)

    let comousar = new Discord.RichEmbed()
        .setTitle("Sintaxe Incorreta")
        .setDescription(` \n• Use: banir \`<@user> <provas> <motivo>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
        .setThumbnail(bot.user.avatarURL)
        .setColor(c.cor)
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");

    let prova = args[1];
    if(!prova) return message.reply(comousar)
    let motivo = args[2];
    if(!motivo) return message.reply(comousar)
  
    await member.ban(`Expulso por: ${message.author.tag} | Motivo: ` + motivo)
    .catch(error => message.reply(`eu não poderia banir por causa de: ${error}`));
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`⚠️ | Um usúario foi expulso do clã!`)
        .addField("Infrator:", member.user.tag, true)
        .addField("ID:", member.id, true)
        .addField("Aplicador:", message.author, true)
        .addField("Infração:", `\`${motivo}\``, true)
        .addField("Provas:", prova, true)
        .setColor(c.cor)
        .setThumbnail(message.author.displayAvatarURL)

    if(message.guild.channels.find(ch => ch.name === "⭐・ᴘᴜɴɪçõᴇs")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴘᴜɴɪçõᴇs");   
        guild.send(kikado).catch(O_o=>{});
        message.channel.send(`${message.author}, usuário banido com sucesso!`)
    }
}

exports.help = {
    name: "banir",
    aliases: ["banir", "ban"]
}