const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot, member, message) => {
    // MENSAGEM DE SAÍDA
    const membros = bot.guilds.get("572205937264164864").members.filter(member => !member.user.bot).size

    let avatar = member.user.avatarURL;

    let embed = new Discord.RichEmbed()

        .setAuthor(`${member.user.username}`, member.user.avatarURL)
        .setDescription(`O(a) jogador(a) ${member} saiu do clã!`)
        .addField(":busts_in_silhouette: **Membros:**", `${membros} membros.`)
        .setThumbnail(avatar)
        .setImage("https://media.discordapp.net/attachments/682989052059844683/747269806062960670/456.png")
        .setFooter('© SkillsManager - Todos os direitos reservados.')
        .setColor("#dd1a1a")

    bot.channels.get("572262427601797121").send(embed)
}