const nodemailer = require('nodemailer')
const {debugLog} = require("express-fileupload/lib/utilities");

const transporter = nodemailer.createTransport({
        service: 'Yandex',
        auth: {
            user: 'prokofiev@azbuka-prom.ru',
            pass: '3*w(6J8EU'
        }
    },
    {
        from: 'prokofiev@azbuka-prom.ru',
        to: 'prokofiev@azbuka-prom.ru'
    }
)

const mailer = async (message) => {
    await transporter.sendMail(message, (err, info) => {
        if (err)
            return console.log('Ошибка отправления');
        console.log('Mail send', info);
    })
}

module.exports = mailer;