const Router = require('express');
const router = new Router();
const sendMailController = require('../controller/sendMail')

router.post('/sendMail', sendMailController.sendMail)

module.exports = router;