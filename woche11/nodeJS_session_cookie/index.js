import bodyParser from 'body-parser'
import express from 'express'
import session from 'express-session' // middleware for session

const PORT = 8080 || 8081
const app = express()


app.use(bodyParser.json())
//add the session middleware and register session
app.use(session({
    secret: "lakjfdlkasdjfksd", // random characters
    resave: false,
    saveUninitialized: false
}));


app.get("/", (req,res)=>{

    res.send("hello session")

})

app.get("/shopping/cart", (req, res)=>{

    const { cart } = req.session

    if (!cart) {
        res.send("no items in your cart session")
    } else {

        res.json(cart)
    }

})

app.post("/shopping/cart/item", (req,res)=>{

    console.log(req.body)
    //define the item object
    const {item, quantity} = req.body
    const cartItem = {item, quantity}
    const {cart} = req.session;
    if(cart){
        //this below line has to be destructured => only for demo purpose
        req.session.cart.items.push(cartItem)
    }else{
        //we will add a nested cart property to the session object with an property ITEMS to store the items
        req.session.cart = {
            items:[cartItem]
        };
    }
    res.send("item added to cart session")
})



app.listen(PORT, ()=>console.log(`server listen to port ${PORT}`))