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
    let isSendMail, errMail;
    await transporter.sendMail(message, (err, info) => {
        if (err) {
            isSendMail = false;
            errMail = err;
            return;
        }
        isSendMail = true;
        return;
    })
    return isSendMail ? {message: 'Сообщение доставлено'} : {error: errMail}
}

module.exports = mailer;