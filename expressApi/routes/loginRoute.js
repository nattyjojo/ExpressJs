import express from 'express';
import loginUserHtmlTem from '../htmlTemp.js';
const loginHtml = loginUserHtmlTem.loginUserHtmlTem
import bodyParser from 'body-parser';
import loginMiddleWare from '../middleWares/loginMiddleWare.js';


const loginRoute = express.Router();
loginRoute.use(bodyParser.urlencoded({ extended: false }));


loginRoute.get('/login', (req, res) => {
    res.send(loginHtml)
})
.post('/login', (req, res) => {
    const loginData={
        userName: req.body.Fname,
        password: req.body.password
    }
    loginMiddleWare(loginData, res)
    
})



export default loginRoute