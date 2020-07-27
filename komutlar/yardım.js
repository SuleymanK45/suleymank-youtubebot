const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let prefix = '+'
let yardım = new Discord.RichEmbed()
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Yapımcı Suleyman#2383',`
**+sunucu** : ***Moderasyon Komutlarını Açar***.
**+genel** : ***Kullanıcı Komutları Açar***.
**+eğlence** : ***Yeni Komutları Açar***.
**+oyunlar** : ***Oyunları Açar***.
**+kayıt** : ***Sunucunuza Gelenleri Kayıt Eder***`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Yardım eder.',
  usage: 'yardım'
};
//Süleyman
