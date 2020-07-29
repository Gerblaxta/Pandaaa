const Discord = require('discord.js')
const colors = require('../lib/colors.json')
const moment = require('moment')
const version = require('discord.js')
require('moment-duration-format')

exports.run = (client, message, args, level) => {
  const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]')
  const embed = new Discord.RichEmbed()
    .setAuthor('Bot Information')
    .setColor(colors.default)
    .setThumbnail(client.user.avatarURL)
    .addField('Total guilds:', message.client.guilds.size, true)
    .addField('Total members:', `${message.client.users.size}`, true)
    .addField('ID', `${message.client.user.id}`, true)
    .addField('Hosted in', ':flag_de: Germany', true)
    .addField('Uptime', `${duration}`, true)
    .addField('Created by', '<@536989168266379271>', true)
    .addField('Support server', '[Coming Soon]')
    .setTimestamp()
  message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  aliases: ['botinfo'],
  guildOnly: false,
  permLevel: 'User'
}

exports.help = {
  name: 'bot',
  category: 'Utility',
  description: 'Displays information about the bot',
  usage: 'bot'
}
