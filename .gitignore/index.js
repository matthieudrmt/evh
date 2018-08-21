const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("faire de la gym");
    console.log("Le bot a bien été connecté");
});

bot.login("NDgxNDE2MjYzMjE4NzU3NjMy.Dl2FiA.EBLBDShVt2pZXDG_xGLoLDJr6JY");
