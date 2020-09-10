const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let js = "https://www.javascript.com/"
    let node = "https://nodejs.org/"
    let dcjs = "https://discord.js.org/"
    let botembed = new Discord.RichEmbed()
        .setTitle(`<:coding:747856741290606704> Informações da máquina:`)
        .setDescription(`Sou um BOT voltado para comandos de moderação da Skills!\n\nAbaixo estão as minhas informações:`)
        .addField(`<a:topgg:745770490194427914> **Meu prefixo**`, `${c.prefix}`, true)
        .addField(`<:emoji_12:747796438192226324> **Meu desenvolvedor**`, `\`cheaat#0404\``, true)
        .addField(`<:streaming:747854415028945049> **Streamando**`, `Skills!`, true)
        .addField(`<:javascript:747861740053725205> **Linguagem de programação**`, `[JavaScript](${js})\n[NodeJS](${node}) \`v12.x\`\n[Discord.JS](${dcjs}) \`v11\``, true)
        .addField(`<:datatransfer:747858193518035034> **Ping**`, `${Math.round(bot.ping)}ms`, true)
        .setThumbnail(bot.user.avatarURL)
        .setColor(c.cor)
    message.channel.send(botembed);
}

exports.help = {
    name: "botinfo",
    aliases: ["infobot"]
}