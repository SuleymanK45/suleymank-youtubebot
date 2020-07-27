const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('🎲 Attığın Zarın Sonucu: ' + zar()));

    function zar() {
        var rand = ['1', '2', '3', '4', '5', '6'];
        return rand[Math.floor(Math.random()*rand.length)];
    }
}
exports.conf = {
  enabled: false,
  aliases: ["zarat"],
  guildOnly: false,
  permLevel: 0
};
exports.help = {
  name: 'zarat',
  description: 'zar atar',
  usage: 'zarat'
  };
