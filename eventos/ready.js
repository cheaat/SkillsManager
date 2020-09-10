const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot) => {
    console.log("[INFO] BOT loader has been started.")
    console.log("  ")
    console.log("[FRAMEWORK] Discord.js command and event handler.")
    console.log("[FRAMEWORK] Developed by: cheaat#0404")
    console.log("[FRAMEWORK] Version: 1.0")
    console.log("  ")
    console.log("[SUCCESS] Commands and events has been registered.")
    console.log("  ")
    console.log("[SUCCESS] Logged in "+bot.user.username+"#"+bot.user.discriminator+".");

    function botStatus() {
        let status = [
            `🤩 Skills!`,
            `🧐 Está perdido? Digite: ${c.prefix}ajuda`
        ];
        let rstatus = Math.floor(Math.random() * status.length);

        bot.user.setActivity(status[rstatus], {type: 'STREAMING', url: "https://www.twitch.tv/twitch"});
      };
  setInterval(botStatus, 10000);
}