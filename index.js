require('dotenv').config();
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express();
const sendMailRouter = require('./routes/sendMail')

PORT = 5000
app.use(express.json())
app.use(fileUpload({}))
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use('/', sendMailRouter);

async function startApp() {
    try {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();