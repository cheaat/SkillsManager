const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    if(message.author.id !== '576896667098546184') return;
    let result = await eval(args.join(' '))
    console.log(result)
    message.channel.send(`Executado! ${result}`)
}

exports.help = {
    name: "eval",
    aliases: ["executar"]
}