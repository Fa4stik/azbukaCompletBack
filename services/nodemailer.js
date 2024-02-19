const nodemailer = require('nodemailer')
const {debugLog} = require("express-fileupload/lib/utilities");

const transporter = nodemailer.createTransport({
        // service: 'Yandex',
        host: 'smtp.yandex.com',
        port: 465,
        secure: true,
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
    return new Promise(async (resolve, reject) => {
        await transporter.sendMail(message, (err, info) => {
            console.log(err)
            console.log(info)
            err
                ? reject(err)
                : resolve(info)
        })
    })
}

module.exports = mailer;
