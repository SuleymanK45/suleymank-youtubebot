const Discord = require('discord.js')
exports.run = async (client, message) => {
    message.member.addRole("736547473627152435")
   const s = new Discord.RichEmbed()
   .setTitle('Js Rolünü Aldın!')
   .setDescription('JavaScript Rolünü Aldın İyi Kullanımlar!')
   return message.channel.send(s)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["js"],
  permLevel: 0
}
exports.help = {
  name: 'js',
  description: 'js rolü verir.',
  usage: 'jss'
};
