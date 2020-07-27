const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let prefix = '+'
let yardım = new Discord.RichEmbed()
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Yapımcı Suleyman#2383',`
**+kelimetahmini** : ***YAKINDA***.
**+sayıtahmini** : ***Bot İle Sayı Tahmini Oynarsınız***.
**+adamasmaca** : ***YAKINDA***
**+mayıntarlası** : ***Bot İle Mayın Tarlası Oynarsınız***`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyunlar"],
  permLevel: 0
};
exports.help = {
  name: 'yardımoyun',
  description: 'Oyun.',
  usage: 'oyunlar'
};
//Süleyman
