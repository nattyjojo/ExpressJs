import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const cookies = (value) => {
    const signed = jwt.sign(value, process.env.ACCESS_TOKEN_SECRET)
    return signed

}
export default cookies