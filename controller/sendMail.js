const sendMailServices = require('../services/sendMail')
const sendTgServices = require('../services/sendTg')

class SendMail {
    async sendMail(req, res) {
        try {
            const answerMail = await sendMailServices.sendMail(req.body, req.files)
            const answerTg = await sendTgServices.sendTg(req.body, req.files)
            return res.json({
                answerMail,
                answerTg
            })
        } catch (e) {
            return "Error";
        }
    }
}

module.exports = new SendMail();