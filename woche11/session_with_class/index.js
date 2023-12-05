import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import 'dotenv/config.js'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { getUser } from './dumb/db_handler.js';
import jwtValidation from './middleware/jwtValidation.js';
const PORT = 8082 || 8081
const app = express();

app.use(bodyParser.json());
app.use(cookieParser())


app.get("/", (req, res) => {

    res.send(`<h1>Sessions / JWT with ExpressJS</h1>`)
});
//SESSIONS EXERCISE
//add session as middleware and register
app.use(session({
    secret: "hallo",
    resave: false,
    saveUninitialized: false,
}))


app.get("/shopping/cart", (req, res) => {

    const { cart } = req.session
    if (!cart) {
        res.json({ msg: "no items in cart" })
    } else {

        res.json(cart.items)
    }
})

app.post("/shopping/cart/item", (req, res) => {

    const { item, quantity } = req.body;
    const cartItem = { item, quantity };

    const { cart } = req.session;

    if (cart) {
        req.session.cart.items.push(cartItem)
    } else {
        req.session.cart = {
            items: [cartItem]
        }
    }

    res.json({ msg: "item to cart added" })
})


//JWT EXERCISE
// download https://www.npmjs.com/package/jsonwebtoken
// download https://www.npmjs.com/package/cookie-parser

app.get("/dashboard", jwtValidation, (req, res) => {
    res.send(`<h1>Dashboard</h1>`)
});

app.post("/login", async (req, res) => {

    const { username, password } = req.body;
    const user = await getUser();

    if (user.password !== password) {
        res.status(403).json({ msg: "invalid login" })
    } else {

        //important part for JWT
        const token = await jwt.sign(user, process.env.SUPER_SECRET_JWT_TOKEN, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true
        })

        res.redirect("/dashboard")

    }

})












app.listen(PORT, () => console.log(`server listen to http://localhost:${PORT}`))