require('dotenv').config();
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express();
const sendMailRouter = require('./routes/sendMail')

app.use(express.json())
app.use(fileUpload({}))
app.use(cors({
    credentials: true,
    origin: "*"
}));

app.use('/api', sendMailRouter);

async function startApp() {
    try {
        app.listen(process.env.SERVER_PORT, () => console.log(`Server is running on port ${process.env.SERVER_PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();