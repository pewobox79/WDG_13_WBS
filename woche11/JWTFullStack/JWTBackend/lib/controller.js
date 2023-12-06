import Product from "../schemas/ProductsSchema.js";
import User from "../schemas/UserSchema.js";

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

        //TODO bcrypt password for more protection!!!!
        
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