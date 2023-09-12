const mailer = require('./nodemailer')
const uuid = require('uuid')

class SendMail {
    async sendMail(data, files) {
        const {contactFF, nameFF, projectFF, telFF} = data
        let attach;
        if (files) {
            const keysFiles = Object.keys(files);
            attach = keysFiles.map((key) => {
                return {
                    filename: files[key].name,
                    content: files[key].data
                }
            })
        }
        const message = {
            subject: `${nameFF} / ${projectFF}`,
            text: `Заказ от ${nameFF}. Телефон ${telFF}`,
            attachments: [...attach]
        }
        const result = await mailer(message)
        return result;
    }
}

module.exports = new SendMail()