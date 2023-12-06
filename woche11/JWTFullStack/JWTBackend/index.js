import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { addNewItemToCart, createNewProduct, getAllProducts } from './lib/controller.js';
import { mongoDBConnection } from './db/mongoDB.js';
const PORT = 3500
const app = express()

//mongoDB connection
mongoDBConnection();


//MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())


//ROUTES
app.get("/", (req,res)=>{
    res.send(`<h1>JWTFullstack Backend`)
})

app.post("/user/login", (req,res)=>{
    //res mit "authenticated" or "access denied"
    // middleware JWTValidation

    res.send("user logged in")
})
app.post("/user/registration", (req,res)=>{
    // res "registration successfull" or "registration failed"
    res.send("user registered")
})


app.get("/api/shop/products", getAllProducts)

app.post("/api/newproduct", createNewProduct)

app.post("/api/shop/shoppingcart", addNewItemToCart)



app.listen(PORT, ()=>console.log(`server listen to http://localhost:${PORT}`))