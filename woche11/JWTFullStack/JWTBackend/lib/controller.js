import product from "../schemas/ProductsSchema.js"

export const getAllProducts =async (req, res)=>{

    try{
        const productList = await product.find({})
    
            console.log("list", productList)
            res.json(productList)
       
    }catch(err){
        res.status(500).json({msg: "getting all products failed"})
    }
    
    


}

export const createNewProduct = async (req,res)=>{

    const {name, description} = req.body


   const newProduct = await product.create({
    name: name,
    description: description

   })

   console.log(newProduct)
   res.send("new product added")

}


export const addNewItemToCart=async()=>{
    res.send("item to cart added (session)")
}