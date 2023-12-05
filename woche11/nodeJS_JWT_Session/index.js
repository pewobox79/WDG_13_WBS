import express from 'express'
import { getUser } from './db.js/helper.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import cookieJwtAUTH  from './middleware/jwtmiddleware.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const PORT = 8080 || 8081
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send(`<h1>JWT Token Session</h1>`)
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await getUser();

    if (user.password !== password) {
        res.status(403).json({ msg: "invalid login" })
    } else {
 
        //important part JWT
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.cookie("token", token, {
            httpOnly: true
        })

        return res.redirect("/dashboard")
    }
})

app.get("/dashboard", (req, res) => {
    res.send(`<h1>Dashboard</h1>`)
})

app.post("/add", cookieJwtAUTH, async (req, res) => {
    const {user} = req
    res.json({msg: "added something by ", user})
})

app.listen(PORT, () => console.log(`server listen to port ${PORT}`))

