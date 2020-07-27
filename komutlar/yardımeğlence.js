const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let prefix = '+'
let yardım = new Discord.RichEmbed()
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Yapımcı Suleyman#2383',`
**+zarat** : ***Zar Atar***.
**+wasted** : ***Kişiyi Öldürür***.
**+stresçarkı** : ***Stres Çarkı***.
**+yazıtura** : ***Yazı Tura Atar***.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};
exports.help = {
  name: 'yardımeğlence',
  description: 'Eğlence.',
  usage: 'eğlence'
};
//Süleyman
