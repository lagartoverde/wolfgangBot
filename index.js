const Discord = require('discord.io');
const auth = require('./auth.json');


const bot = new Discord.Client({
  token: auth.token,
  autorun: true
})

bot.on('ready', (evt) => {
  console.log('connected')
})

bot.on('message', (user, userID, channelID, message, evt) => {
  switch(message) {
    case '!cwl':
      bot.sendMessage({
        to: channelID,
        message: 'CWL signups will be added soon'
      })
      break;
    case '!hi':
      bot.sendMessage({
        to: channelID,
        message: 'Hi ' + user
      })
      break;
  }
  
})