const mailer = require('./nodemailer')

class SendMail {
    async sendMail(data) {
        const {contactFF, nameFF, projectFF, telFF} = data
        const message = {
            subject: `${nameFF} / ${projectFF}`,
            text: `Заказ от ${nameFF}. Телефон ${telFF}`
        }
        await mailer(message)
        return {
            message: 'Сообщение успешно доставлено!'
        };
    }
}

module.exports = new SendMail()