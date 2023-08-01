import express from 'express'
import foodData from '../foodData.js';
import middleware from '../middleWare.js';



const router = express.Router()
router.get('/:food/:apiKey', (req, res) =>{
    res.send('</h1>how you doing</h1>')
    const apikey = req.params.apiKey
    const validateKey =  middleware(apikey)
    if(validateKey === true){
        const sendData = (data) =>{
            if(data) res.send(data)
        }
        const food = req.params.food
        foodData.forEach(element => {
            if(element.name === food){
                sendData(element)
                
            }
            
        });

    }else{
        res.send('incorrect apikey')
    }
   
})
export default router


/*
    Have a route for every dish
        only the corresponding dish should be send as a response
    the / route should give the whole list
    add a "info" page that explains how to use the API

    NOTE: Use POSTMAN as a tool to "mimic" the frontend
*/