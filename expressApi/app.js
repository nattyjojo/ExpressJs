import express from 'express'
import registerationRoute from './routes/RegisterRoute.js'
import loginRoute from './routes/loginRoute.js'
 


const app = express()
app.use('', loginRoute, registerationRoute)






app.listen(16000, (err)=>{
    if(err){
        app.end()
    }
    console.log('listening')
})