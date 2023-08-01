import Jwt from "jsonwebtoken"
import dotenv from 'dotenv'

const generateApiKey = (userName) => {
    const pallet = {apikey:userName}

    const apikey =  Jwt.sign(pallet, process.env.API_TOKEN)
    return apikey

}
export default generateApiKey