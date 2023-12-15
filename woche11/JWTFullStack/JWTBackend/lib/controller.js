import Product from "../schemas/ProductsSchema.js";
import User from "../schemas/UserSchema.js";
import bcrypt from 'bcrypt'


export const getAllProducts =async (req, res)=>{

    try{
        const productList = await Product.find({})
            console.log("list", productList)
            res.json(productList)
       
    }catch(err){
        res.status(500).json({msg: "getting all products failed"})
    }
    
}

export const createNewProduct = async (req,res)=>{

    const {name, description} = req.body


   const newProduct = await Product.create({
    name: name,
    description: description

   })

   console.log(newProduct)
   res.send("new product added")

}


export const addNewItemToCart=async()=>{
    res.send("item to cart added (session)")
}


export const createNewUser =async (req,res)=>{
        const {username, password} = req.body;

        try{
                const newUser = await User.create({
                    username: username,
                    password: password
                })

                console.log("new user added to mongo", newUser)
                res.json({msg: "user registration successfull"})

        }catch(err){

            console.log("new user registration failed", err)
            res.json({ msg: "user registration failed" })

        }

}


export const loginUser =async(req,res)=>{

    const {identifier, password}=req.body

    const myQuery = identifier.includes("@") ? {email: identifier} : {username:identifier}
    try {
        const user = await User.findOne(myQuery)

        if(user){

            bcrypt.compare(password, user.password, (err, result)=>{

                if(err) throw new Error("error happend")

                if(result){
                    res.json({ msg: "user Authenticated", user })
                }else{
                    res.json({ msg: "password falsch" })
                }
            } )

        }

    } catch (err) {
        res.json({ msg: "no user found" })

    }
}