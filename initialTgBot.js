const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TG_BOT_TOKEN, {
    polling: true
});

module.exports = bot