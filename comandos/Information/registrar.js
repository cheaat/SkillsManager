const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
message.delete();
let member = message.author;

const whitelist = [
    "747258365574381638"
]

if (!whitelist.includes(message.channel.id)) return message.reply("você já está registrado! Caso queira alterar o seu registro, digite \`s!trocarnick\`")

let embed = new Discord.RichEmbed()

.setDescription(`:incoming_envelope: Responda às perguntas no seu privado para se registrar!`)
.setColor(c.cor)

message.channel.send(embed)

message.author.send(`Qual o seu IGN (Nick IN-GAME)?`).then(async (msg_suges) => {
let collector = msg_suges.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })

collector.on('collect', async (nick) => {

message.author.send(`Você irá modificar seu nick para colocar a TAG da SKILLS? Se sim, qual será o nick?`).then(async (msg_suges1) => {
let collector1 = msg_suges1.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })
      
collector1.on('collect', async (skills) => {
      
message.author.send(`Quem foi o responsável pelo seu teste de ingressão a Skills?`).then(async (msg_suges2) => {
let collector3 = msg_suges2.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 50000000 })
        
collector3.on('collect', async (recruter) => {

    let embed = new Discord.RichEmbed()
  
    .setColor(c.cor)
    .setTitle(`**${nick}** | ${message.author.username}`)
    .setDescription(`<a:topgg:745770490194427914> IGN: ${nick}\n<:Skills:703069952139198504> TAG da Skills: ${skills}\n<:cr7:730793216416284813> Responsável pelo teste: ${recruter}`)
    .setThumbnail(`https://mc-heads.net/body/${nick}`)
    .setFooter(`Registro de: ${message.author.username}`, message.author.avatarURL)

    message.author.send(`<:certo:678374718587535402> Seu registro foi enviado, aguarde até que algum membro da equipe aprove-o!`)
    if(message.guild.channels.find(ch => ch.name === "registros")){
        let guild = message.guild.channels.find(ch => ch.name === "registros");   
        guild.send(embed).catch(O_o=>{}).then(async msg => {
            await msg.react("678374718587535402")
            await msg.react("678374734861172736")

            const aprovado = msg.createReactionCollector((r, u) => r.emoji.id === "678374718587535402" && u.id === message.author.id, { time: 120000 });
            const reprovado = msg.createReactionCollector((r, u) => r.emoji.id === "678374734861172736" && u.id === message.author.id, { time: 120000 });
        
            aprovado.on('collect', async r => {
                const role = message.guild.roles.find(role => role.name === '⟨👤⟩ Membros')
                message.member.setNickname(nick.content);
                message.member.addRole(role);
              })
            
              reprovado.on('collect', async r => {
                member.kick();
              })
        }
        )}
}
)}
)
}
)}
)}
)}
)
}

exports.help = {
    name: "registrar",
    aliases: ["register"]
}