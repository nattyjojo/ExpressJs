import mysql from 'mysql2';
import dotenv from 'dotenv';
const env = dotenv.config();
const addNewUserToDataBase = (userData) => {
    const dataBase = mysql.createConnection({
        user: process.env.user,
        password: process.env.password,
        host: process.env.host,
        database: process.env.database
    })

    dataBase.connect((err)=>{
        if(err){
            console.log(err)
        }
        console.log('connected')
    })
    dataBase.query('INSERT INTO users(password, username, email) VALUES(?, ?, ?)',
    [userData.password, userData.name, userData.email], 
    (err, result) => {
        if(err){
            console.log(err)
        }
    })
    dataBase.end()
}
export default addNewUserToDataBase