const Discord = require('discord.js')
const c = require("../../config.json")

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR'))
  return message.reply(`você não tem permissão para utilizar esse comando!`)
  let embed = new Discord.RichEmbed()

  .setDescription(`:incoming_envelope: Responda às perguntas no seu privado!`)
  .setColor(c.cor)

  message.channel.send(embed)
  
  message.author.send(`Qual título quer dar a este tópico?`).then(async (msg_suges) => {
  let collector = msg_suges.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })

  collector.on('collect', async (titulo) => {

  message.author.send(`Qual descrição deseja dar ao tópico?`).then(async (msg_suges1) => {
  let collector1 = msg_suges1.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })

  collector1.on('collect', async (assunto) => {

  message.author.send(`Qual cor você deseja no tópico? (Envie no formato #HEX)`).then(async (msg_suges2) => {
    let collector3 = msg_suges2.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })
  
    collector3.on('collect', async (cor) => {

  message.author.send(`Qual id do canal que você deseja enviar o tópico?`).then(async (msg_suges) => {
  let collector = msg_suges.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })
            
  collector.on('collect', async (id) => {

  let embed = new Discord.RichEmbed()
  
  .setColor(`${cor}`)
  .setTitle(titulo)
  .setDescription(assunto)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Publicado por: ${message.author.username}`, message.author.avatarURL)

  message.author.send(`<:certo:678374718587535402> Tópico enviado com sucesso!`)
  const canal = client.channels.get(`${id}`).send(embed)

  })
})
  })
})
  })
})
 })
})
}

exports.help = {
  name: "topico",
  aliases: ["anunciar"]
}