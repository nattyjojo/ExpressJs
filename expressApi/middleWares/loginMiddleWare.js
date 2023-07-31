import express from 'express';
import incryptPassword from '../increyptPassword.js';
import queryLoginDataBase from '../dataBase/queryDatabase.js';

const loginMiddleWare = async (loginData) => {
    const queryUserName = await queryLoginDataBase(loginData.userName)
    const increyptPassword = await incryptPassword(loginData.password)
    const ftched  = queryUserName
    console.log(ftched)
    
}

export default loginMiddleWare