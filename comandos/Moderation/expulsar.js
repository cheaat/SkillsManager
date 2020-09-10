const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args, prefix) =>{

    if(!message.member.hasPermission('KICK_MEMBERS'))
    return message.reply(`você não tem permissão!`)

    let comousar = new Discord.RichEmbed()
        .setTitle("Sintaxe Incorreta")
        .setDescription(` \n• Use: expulsar \`<@user> <motivo>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
        .setThumbnail(bot.user.avatarURL)
        .setColor(c.cor)
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Nenhum";
  
    await member.kick(`Expulso por: ${message.author.tag} | Motivo: ` + motivo)
    .catch(error => message.reply(`eu não poderia banir por causa de: ${error}`));
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`⚠️ | Um usúario foi expulso do clã!`)
        .addField("Infrator:", member.user.tag, true)
        .addField("ID:", member.id, true)
        .addField("Aplicador:", message.author, true)
        .addField("Infração:", `\`${motivo}\``, true)
        .setColor(c.cor)
        .setThumbnail(message.author.displayAvatarURL)

    if(message.guild.channels.find(ch => ch.name === "⭐・ᴘᴜɴɪçõᴇs")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴘᴜɴɪçõᴇs");   
        guild.send(kikado).catch(O_o=>{});
        message.channel.send(`${message.author}, usuário expulso com sucesso!`)
    }
}

exports.help = {
    name: "expulsar",
    aliases: ["expulsar"]
}