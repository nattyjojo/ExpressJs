import ApiKeyTem from '../htmlTemp.js'
import express from 'express'
import validateToken from '../middleWares/validataTokenMiddleWare.js'


const generateApiKeyRoute = express.Router()

const generateApiKeyTem = ApiKeyTem.generateApiKeyTem


generateApiKeyRoute.get('/apiKey', (req, res, next)=>{
    
    res.send(generateApiKeyTem)
   
})

generateApiKeyRoute.use(validateToken)

export default generateApiKeyRoute