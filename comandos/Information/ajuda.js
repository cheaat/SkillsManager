const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    var embedInicial = new Discord.RichEmbed()

    .setDescription(`Olá ${message.author}, se você utilizou esse comando deve ser porque está com dificuldades de utilizar as minhas atribuições, então vamos lá!\n
    **Veja as reações abaixo:**`)
    .addField(`🔐・**__MODERAÇÃO__**`, `Comandos de Moderação.`)
    .addField(`🔎・**__INFORMAÇÃO__**`, `Comandos de Informações.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
    .setFooter(`© SkillsManager - Todos os direitos reservados.`)
  
    let embed1 = new Discord.RichEmbed()
    .setTitle(`🔐・**__MODERAÇÃO__**:`)
    .addField(`• \`${c.prefix}anunciar\``, `Realizar anúncio em algum canal do discord.`)
    .addField(`• \`${c.prefix}banir\``, `Banir algum membro.`)
    .addField(`• \`${c.prefix}limpar\``, `Limpar as mensagens de um canal.`)
    .addField(`• \`${c.prefix}silenciar\``, `Silenciar algum membro.`)
    .addField(`• \`${c.prefix}expulsar\``, `Expulsar algum membro.`)
    .addField(`• \`${c.prefix}topico\``, `Enviar algum tópico em um canal do discord.`)
    .addField(`• \`${c.prefix}imagem\``, `Enviar alguma imagem em um canal do discord.`)
    .addField(`• \`${c.prefix}warn\``, `Dar advertência em algum membro.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
    .setFooter(`© SkillsManager - Todos os direitos reservados.`)
  
    let embed2 = new Discord.RichEmbed()
    .setTitle(`🔎・**__INFORMAÇÃO__**:`)
    .addField(`• \`${c.prefix}ajuda\``, `Ver meus comandos.`)
    .addField(`• \`${c.prefix}registrar\``, `Se registrar no clã.`)
    .addField(`• \`${c.prefix}trocarnick\``, `Trocar o seu nick no Discord.`)
    .addField(`• \`${c.prefix}botinfo\``, `Visualizar as informações sobre a máquina.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
    .setFooter(`© SkillsManager - Todos os direitos reservados.`)
   
    message.channel.send(embedInicial).then(async msg => {
  
    await msg.react("🔙")
    await msg.react("🔐")
    await msg.react("🔎")
   
    const inicio = msg.createReactionCollector((r, u) => r.emoji.name === "🔙" && u.id === message.author.id, { time: 120000 });
    const econo = msg.createReactionCollector((r, u) => r.emoji.name === "🔐" && u.id === message.author.id, { time: 120000 });
    const mod = msg.createReactionCollector((r, u) => r.emoji.name === "🔎" && u.id === message.author.id, { time: 120000 });
  
    inicio.on('collect', async r => {
      msg.edit(embedInicial)
      r.remove(message.author.id)
    })
  
    econo.on('collect', async r => {
      msg.edit(embed1)
      r.remove(message.author.id)
    })
  
    mod.on('collect', async r => {
      msg.edit(embed2)
      r.remove(message.author.id)
    })
    })
}

exports.help = {
    name: "ajuda",
    aliases: ["comandos"]
}