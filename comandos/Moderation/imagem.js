const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
  message.delete();
  
  if(!message.member.hasPermission('ADMINISTRATOR'))
  return message.reply("você não tem permissão para utilizar esse comando!")

  let comousar = new Discord.RichEmbed()
    .setTitle("Sintaxe Incorreta")
    .setDescription(` \n• Use: imagem \`<envie o arquivo da imagem>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)

  let imageUrl = message.attachments.first();
  if(!imageUrl) return message.reply(comousar)
  
  message.channel.send("imagem", imageUrl)
}

exports.help = {
    name: "imagem",
    aliases: ["img"]
}