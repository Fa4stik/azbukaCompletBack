const mailer = require('./nodemailer')
const uuid = require('uuid')

class SendMail {
    async sendMail(data, files) {
        console.log('Start send mail')
        const {contactFF, nameFF, projectFF, telFF} = data
        let attach;
        files && (
            attach = Object.keys(files).map((key) => ({
                filename: files[key].name,
                content: files[key].data
            }))
        )
        console.log('files send mail')
        const message = {
            subject: `${nameFF} / ${projectFF}`,
            text: `Заказ от ${nameFF}.\nТелефон ${telFF}.\nКонтакты для связи ${contactFF}`,
        }
        attach && (
            message["attachments"] = [...attach]
        )

        console.log('result send ')

        let result;

        try {
            result = await mailer(message);
        } catch (err) {
            result = err
        }

        return {result}
    }
}

module.exports = new SendMail()