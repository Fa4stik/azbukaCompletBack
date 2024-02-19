const mailer = require('./nodemailer')
const uuid = require('uuid')

class SendMail {
    async sendMail(data, files) {
        const {contactFF, nameFF, projectFF, telFF} = data
        let attach;
        if (files) {
            const keysFiles = Object.keys(files);
            attach = keysFiles.map((key) => ({
                filename: files[key].name,
                content: files[key].data
            }))
        }
        const message = {
            subject: `${nameFF} / ${projectFF}`,
            text: `Заказ от ${nameFF}.\nТелефон ${telFF}.\nКонтакты для связи ${contactFF}`,
            attachments: attach ? [...attach] : undefined
        }
        return mailer(message);
    }
}

module.exports = new SendMail()