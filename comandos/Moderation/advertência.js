const Discord = require('discord.js');
const c = require('../../config.json');

exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    let motivo = args.slice(1).join(" ")
    let comousar = new Discord.RichEmbed()
        .setColor(c.cor)
        .setTitle(`Sintaxe errada!`)
        .setDescription(` \n• Use: warn \`<@user> <motivo>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
        .setThumbnail(bot.user.avatarURL)
    if(!member) return message.reply(comousar)
    if(!motivo) return message.reply(comousar)

    let punicao = new Discord.RichEmbed()
        .setColor(`#FFDF00`)
        .setTitle(`<a:Certinho:753437200019882079> Sua punição foi aplicada com sucesso. <a:Certinho:753437200019882079>`)
        .setDescription(`Sua punição em **${member.user.username}** por **${motivo}**, foi aplicada com êxito.`)

    let embed = new Discord.RichEmbed()
        .setColor(`#FFDF00`)
        .setTitle(`:star: Punir ${member.user.username} :star:`)
        .setDescription(`Quantas estrelas de punição o jogador **${member.user.username}** irá ficar após essa punição?`)
        .setThumbnail(member.user.avatarURL)
        .setFooter(`Aplicada por: ${message.author.username}`, message.author.avatarURL)

    message.channel.send(embed).then(async msg => {

    await msg.react("1️⃣")
    await msg.react("2️⃣")
    await msg.react("3️⃣")
    await msg.react("4️⃣")
    await msg.react("5️⃣")

    const uma = msg.createReactionCollector((r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id, { time: 120000 });
    const duas = msg.createReactionCollector((r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id, { time: 120000 });
    const tres = msg.createReactionCollector((r, u) => r.emoji.name === "3️⃣" && u.id === message.author.id, { time: 120000 });
    const quatro = msg.createReactionCollector((r, u) => r.emoji.name === "4️⃣" && u.id === message.author.id, { time: 120000 });
    const cinco = msg.createReactionCollector((r, u) => r.emoji.name === "5️⃣" && u.id === message.author.id, { time: 120000 });

    uma.on('collect', async r => {
        const role = message.guild.roles.find(role => role.name === '★')
        const frole = message.guild.roles.find(role => role.name === '⠀⠀⠀⠀⠀⠀⠀| Punições |⠀⠀⠀⠀⠀⠀⠀⠀')
        member.addRole(role);
        member.addRole(frole)
        message.channel.send(punicao)
        msg.delete();

        const advert = new Discord.RichEmbed()
        .addField("👤 Membro:", member.user)
        .addField("🖊️ Motivo do aviso:", motivo)
        .addField("⭐ Quantidade de estrelas aplicadas:", `<@&721105398240772177>`)
        .setTimestamp()
        .setColor(`#FFDF00`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Aplicada por: ${message.author.username}`, message.author.avatarURL)
    
        if(message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ");   
        guild.send(advert).catch(O_o=>{});
        }
    })
    duas.on('collect', async r => {
        const role2 = message.guild.roles.find(role => role.name === '★★')
        const grole2 = message.guild.roles.find(role => role.name === '★')
        const frole2 = message.guild.roles.find(role => role.name === '⠀⠀⠀⠀⠀⠀⠀| Punições |⠀⠀⠀⠀⠀⠀⠀⠀')
        member.addRole(role2);
        member.addRole(frole2);
        member.removeRole(grole2)
        message.channel.send(punicao)
        msg.delete();

        const advert = new Discord.RichEmbed()
        .addField("👤 Membro:", member.user)
        .addField("🖊️ Motivo do aviso:", motivo)
        .addField("⭐ Quantidade de estrelas aplicadas:", `<@&721105396625834024>`)
        .setTimestamp()
        .setColor(`#FFDF00`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Aplicada por: ${message.author.username}`, message.author.avatarURL)
    
        if(message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ");   
        guild.send(advert).catch(O_o=>{});
        }

    })
    tres.on('collect', async r => {
        const role3 = message.guild.roles.find(role => role.name === '★★★')
        const grole1 = message.guild.roles.find(role => role.name === '★')
        const grole2 = message.guild.roles.find(role => role.name === '★★')
        const frole3 = message.guild.roles.find(role => role.name === '⠀⠀⠀⠀⠀⠀⠀| Punições |⠀⠀⠀⠀⠀⠀⠀⠀')
        member.addRole(role3);
        member.addRole(frole3);
        member.removeRole(grole1);
        member.removeRole(grole2);
        message.channel.send(punicao)
        msg.delete();

        const advert = new Discord.RichEmbed()
        .addField("👤 Membro:", member.user)
        .addField("🖊️ Motivo do aviso:", motivo)
        .addField("⭐ Quantidade de estrelas aplicadas:", `<@&721105393056743486>`)
        .setTimestamp()
        .setColor(`#FFDF00`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Aplicada por: ${message.author.username}`, message.author.avatarURL)
    
        if(message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ");   
        guild.send(advert).catch(O_o=>{});
        }
    })
    quatro.on('collect', async r => {
        const role4 = message.guild.roles.find(role => role.name === '★★★★')
        const grole1 = message.guild.roles.find(role => role.name === '★')
        const grole2 = message.guild.roles.find(role => role.name === '★★')
        const grole3 = message.guild.roles.find(role => role.name === '★★★')
        const frole4 = message.guild.roles.find(role => role.name === '⠀⠀⠀⠀⠀⠀⠀| Punições |⠀⠀⠀⠀⠀⠀⠀⠀')
        member.addRole(role4);
        member.addRole(frole4);
        member.removeRole(grole1)
        member.removeRole(grole2)
        member.removeRole(grole3)
        message.channel.send(punicao)
        msg.delete();

        const advert = new Discord.RichEmbed()
        .addField("👤 Membro:", member.user)
        .addField("🖊️ Motivo do aviso:", motivo)
        .addField("⭐ Quantidade de estrelas aplicadas:", `<@&718249998940110889>`)
        .setTimestamp()
        .setColor(`#FFDF00`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Aplicada por: ${message.author.username}`, message.author.avatarURL)
    
        if(message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ");   
        guild.send(advert).catch(O_o=>{});
        }
    })
    cinco.on('collect', async r => {
        const role5 = message.guild.roles.find(role => role.name === '★★★★★')
        const grole1 = message.guild.roles.find(role => role.name === '★')
        const grole2 = message.guild.roles.find(role => role.name === '★★')
        const grole3 = message.guild.roles.find(role => role.name === '★★★')
        const grole4 = message.guild.roles.find(role => role.name === '★★★★')
        const frole5 = message.guild.roles.find(role => role.name === '⠀⠀⠀⠀⠀⠀⠀| Punições |⠀⠀⠀⠀⠀⠀⠀⠀')
        member.addRole(role5);
        member.addRole(frole5);
        member.removeRole(grole1);
        member.removeRole(grole2);
        member.removeRole(grole3);
        member.removeRole(grole4);
        member.kick();
        message.channel.send(punicao)
        msg.delete();

        const advert = new Discord.RichEmbed()
        .addField("👤 Membro:", member.user)
        .addField("🖊️ Motivo do aviso:", motivo)
        .addField("⭐ Quantidade de estrelas aplicadas:", `<@&721124343937237064>`)
        .setTimestamp()
        .setColor(`#FFDF00`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Aplicada por: ${message.author.username}`, message.author.avatarURL)
    
        if(message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ")){
        let guild = message.guild.channels.find(ch => ch.name === "⭐・ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ");   
        guild.send(advert).catch(O_o=>{});
        }
    })
    })
    }

exports.help = {
    name: "advertência",
    aliases: ["advertencia", "warn"]
}