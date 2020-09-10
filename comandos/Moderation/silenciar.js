const Discord = require("discord.js");
const c = require("../../config.json");
const ms = require("ms");

exports.run = async (bot, message, args) => {
//s!tempmute @user 1s/m/h/d <motivo>

let comousar = new Discord.RichEmbed()
    .setTitle("Sintaxe Incorreta")
    .setDescription(` \n• Use: silenciar \`<@user> <tempo> <prova> <motivo>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!tomute) return message.reply(comousar);
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");
let prova = args[2];
if(!prova) return message.reply(comousar)
let motivo = args.slice(3).join(" ")
if(!motivo) {
    motivo = "Nenhum"
}
let muterole = message.guild.roles.find(ro => ro.name === "Silenciado");
    if(!muterole){
        try {
            muterole = await message.guild.createRole({
                name: "Silenciado",
                color: "#9e9e9e",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
	}catch(e){
		console.log(e.stack);
	}
}
let mutetime = args[1];
if(!mutetime) return message.reply(comousar);

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> foi silenciado por ${mutetime} com sucesso!`);

const mutado = new Discord.RichEmbed()
        
.setTitle(`⚠️ | Um usúario foi silenciado.`)
.addField("Infrator:", tomute.user.tag, true)
.addField("ID:", tomute.id, true)
.addField("Aplicador:", message.author, true)
.addField("Infração:", `\`${motivo}\``, true)
.addField("Tempo:", `**${mutetime}**`, true)
.addField("Provas:", prova, true)
.setColor(c.cor)
.setThumbnail(message.author.displayAvatarURL)

if(message.guild.channels.find(ch => ch.name === "🔨・ᴘᴜɴɪçõᴇs")) {
let guild = message.guild.channels.find(ch => ch.name === "🔨・ᴘᴜɴɪçõᴇs");   
guild.send(mutado).catch(O_o=>{});
}

setTimeout(function(){
	tomute.removeRole(muterole.id);
	message.channel.send(`<@${tomute.id}>, seu silenciamento temporário expirou!`);
}, ms(mutetime));
}

exports.help = {
    name: "silenciar",
    aliases: ["tempmute"]
}