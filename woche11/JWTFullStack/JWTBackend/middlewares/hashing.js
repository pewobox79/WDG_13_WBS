import bcrypt from 'bcrypt'
const saltRound=10;

export const hashingPassword =(req,res,next)=>{

    const {password}=req.body;

    if(password){
        bcrypt.hash(password, saltRound, (err, hashedPassword)=>{
            
            if(err){
                res.json({msg:"hashing failed..."})
            }else{
                req.body.password = hashedPassword
                next()

            }

        })
    }else{
        next();
    }
    

}