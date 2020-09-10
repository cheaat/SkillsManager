const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot, member, message) => {
    // MENSAGEM DE BEM VINDO
    const membros = bot.guilds.get("572205937264164864").members.filter(member => !member.user.bot).size

    let avatar = member.user.avatarURL;

    let embed = new Discord.RichEmbed()

        .setAuthor(`${member.user.username}`, member.user.avatarURL)
        .setDescription(`O(a) jogador(a) ${member} entrou no clã!`)
        .addField(":busts_in_silhouette: **Membros:**", `${membros} membros.`)
        .setThumbnail(avatar)
        .setImage("https://media.discordapp.net/attachments/682989052059844683/747269227987206164/123.png")
        .setFooter('© SkillsManager - Todos os direitos reservados.')
        .setColor(c.cor)

    bot.channels.get("572262116321656842").send(`${member}`)
    bot.channels.get("572262116321656842").send(embed)
}