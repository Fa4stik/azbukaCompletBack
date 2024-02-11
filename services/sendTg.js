const bot = require('../initialTgBot');
const fs = require('fs');

class SendTg {
    async sendTg(data, reqFiles) {
        const {contactFF, nameFF, projectFF, telFF} = data
        const chatId = process.env.CHANNEL_ID;

        let message = `Контакт: ${contactFF}\nИмя: ${nameFF}\nПроект: ${projectFF}\nТелефон: ${telFF}`;
        reqFiles && (message+='\nВсе вложения для этого сообщения ниже')

        bot.sendMessage(chatId, message)
            .then(() => {
                console.log('Сообщение успешно отправлено');
                if (reqFiles && reqFiles.files.length > 0) {
                    const {files} = reqFiles
                    files.forEach(file => {
                        bot.sendDocument(chatId, file.data)
                            .then(() => {
                                console.log('Файл успешно отправлен');
                            })
                            .catch((error) => {
                                console.error('Ошибка при отправке файла:', error);
                            });
                    })
                }
            })
            .catch((error) => {
                console.error('Ошибка при отправке сообщения:', error);
            });

        return data
    }
}

module.exports = new SendTg()