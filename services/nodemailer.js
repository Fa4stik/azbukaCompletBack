const nodemailer = require('nodemailer')
const {debugLog} = require("express-fileupload/lib/utilities");

const transporter = nodemailer.createTransport({
        service: 'Yandex',
        auth: {
            user: process.env.MAIN_MAIL,
            pass: process.env.MAIN_MAIL_PASS
        }
    },
    {
        from: process.env.MAIN_MAIL,
        to: process.env.MAIN_MAIL
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
