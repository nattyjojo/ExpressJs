import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config()

const queryLoginDataBase =   (userData) => {
    return new Promise((resolve, reject) => {
        const dataBase = mysql.createConnection({
            user: process.env.user,
            password: process.env.password,
            host: process.env.host,
            database: process.env.database
        })
        dataBase.connect((err) => {
            if(err){
                console.log(err)
                reject(err)
            }else{
                console.log('connected')
            }
        })
        dataBase.query(`SELECT password, username FROM users WHERE username = ?`,
        [`${userData}`],
          (err, result) =>{
            if(err){
                console.log(err)
                reject(err)
                dataBase.end()
            }
            resolve(result) 
            dataBase.end()
        })
        
    });
    
}
export default queryLoginDataBase