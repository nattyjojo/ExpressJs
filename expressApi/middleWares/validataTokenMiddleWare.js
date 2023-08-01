import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import express from 'express'
import generateApiKey from './generateAPIKEY.js'
dotenv.config()
const validateToken = express.Router()
validateToken.use(cookieParser())

validateToken.post('/apikey', (req, res, next) => {
    const userCookie = req.cookies.accessToken
    jwt.verify(userCookie, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
        if(err){
            return err
        }else{
            const userName = result.name
            const generated = generateApiKey(userName)
            const validApi = `${userName} your APIKEY is: ${generated}`
            res.send(validApi)

        }
    })
    res.send('how asrrdd')
}) 



export default validateToken