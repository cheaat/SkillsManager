const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot, message) => {

    if(message.isMentioned(bot.user)) {

        let embed = new Discord.RichEmbed()
        
        .setTitle("<:Skills:703069952139198504> Skills Manager!")
        .setDescription(`💈 | Prefixo: ${c.prefix}\n🔧 | Comando de ajuda: ${c.prefix}ajuda`)
        .setColor(c.cor)
        .setThumbnail(bot.user.displayAvatarURL)
        .setFooter(`© Skills - Todos os direitos reservados.`)
        
        message.channel.send(embed)
    }

    if(message.content === "skills"){
        await message.react("703069952139198504")
    }
    if(message.content === "Skills"){
        await message.react("703069952139198504")
    }
}