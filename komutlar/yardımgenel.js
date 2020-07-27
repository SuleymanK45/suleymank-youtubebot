const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let prefix = '+'
let yardım = new Discord.RichEmbed()
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Yapımcı Suleyman#2383',`
**+profil** : ***Kullanıcı Bilgilerinizi Gösterir***.
**+korona** : ***Covid19 Son Durumları Gösterir***.
**+avatar** : ***Avatarını Görürsün***.
**+yapımcım** : ***Geliştiricilerimi Görebilirsiniz***.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["genel"],
  permLevel: 0
};
exports.help = {
  name: 'yardımgenel',
  description: 'Gnel.',
  usage: 'genel'
};
//Süleyman
