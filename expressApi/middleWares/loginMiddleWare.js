import queryLoginDataBase from '../dataBase/queryDatabase.js';
import bcrypt from 'bcrypt'
import cookies from '../cookies.js'

const loginMiddleWare = async (loginData, res) => {
    const queryUserData = await queryLoginDataBase(loginData.userName)
    const userDataBasePassword = queryUserData[0].password
    if(queryUserData.length === 0){
        res.redirect('/register')
        
    }else{
        const increyptPassword = await bcrypt.compare(loginData.password, userDataBasePassword)
        if(increyptPassword === true){
            const user = {name: loginData.userName}
            const token = cookies(user)
            res.cookie('accessToken', token)
            res.send('success')
        }else{
            res.send('incorrect data')
        }

    }
    
}

export default loginMiddleWare