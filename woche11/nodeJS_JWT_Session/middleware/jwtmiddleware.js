import jwt from 'jsonwebtoken'
import 'dotenv/config'

const cookieJwtAUTH =async (req,res,next)=>{

    const token = req.cookies.token;
    try{
        
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user
        next()
    }catch(err){
        res.clearCookie("token");
        res.send({msg:"access denied, please login"})
    } 
}

export default cookieJwtAUTH
