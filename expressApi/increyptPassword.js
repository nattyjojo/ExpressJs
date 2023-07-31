import bcrypt from 'bcrypt';

const incryptPassword = async (password) => {
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
        
    }catch(err){
        if(err){
            console.log(err)
        }else{
            console.log("no err")
        }
    }

}
export default incryptPassword