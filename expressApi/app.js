import express from 'express'
import registerationRoute from './routes/RegisterRoute.js'
import loginRoute from './routes/loginRoute.js'
import generateApiKeyRoute from './routes/generateApiKey.js'
 
const app = express()
app.use('', loginRoute, registerationRoute, generateApiKeyRoute)

app.listen(16000, (err)=>{
    if(err){
        app.end()
    }
    console.log('listening')
})