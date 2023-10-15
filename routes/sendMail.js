const Router = require('express');
const router = new Router();
const sendMailController = require('../controller/sendMail')

router.post('/sendMail', sendMailController.sendMail)
router.get('/test', (req, res) =>
    res.json('BACKEND WORK'))

module.exports = router;