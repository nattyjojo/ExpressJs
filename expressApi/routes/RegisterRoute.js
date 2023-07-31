import express from 'express'
import bodyParser from 'body-parser'
import userTem  from '../htmlTemp.js';
import incryptPassword from '../increyptPassword.js'
import addNewUserToDataBase from '../dataBase/addNewUserToDataBase.js'

const registerationRoute = express.Router()
const registerUserHtmlTem = userTem.registerUserHtmlTem

registerationRoute.use(bodyParser.urlencoded({ extended: false }));


registerationRoute.get('/register', (req, res, next) => {
    res.send(registerUserHtmlTem)

})

.post('/register', async (req, res) => {
    const incryptedPassword = await incryptPassword(req.body.password)
    const userData ={
        name: req.body.Fname,
        email: req.body.email,
        password: incryptedPassword
    }
    addNewUserToDataBase(userData)
    res.send('ok succes')
    

})


export default registerationRoute