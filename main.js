process.env.NTBA_FIX_319 = 1;
const config = require('./config.json');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(config.bot_token, { polling: true });

const is_admin = (id) => {
    for (let i = 0; i < config.admin_id.length; i++) {
        if (config.admin_id[i] == id) return true;
    }
    return false
}

bot.on("polling_error", console.log);

bot.on('message', async (msg) => {
    if (is_admin(msg.from.id) && msg.photo != undefined) {
        bot.sendPhoto(config.channel_id, msg.photo[msg.photo.length - 1].file_id)
        bot.sendMessage(msg.chat.id, "Ok")
    }
});

console.log("Start Bot....")