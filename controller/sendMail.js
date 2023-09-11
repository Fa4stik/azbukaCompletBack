const sendMailServices = require('../services/sendMail')

class SendMail {
    async sendMail(req, res) {
        try {
            const answer = await sendMailServices.sendMail(req.body)
            return res.json(answer)
        } catch (e) {
            return "Error";
        }
    }
}

module.exports = new SendMail();