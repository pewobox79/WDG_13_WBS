import jwt from 'jsonwebtoken';
import 'dotenv/config';

const jwtValidation = async (req, res, next) => {


    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.SUPER_SECRET_JWT_TOKEN);
        req.user = user;
        next()
    } catch (err) {
        res.clearCookie("token")
        res.send({ msg: "access denied, please login" })
    }


}

export default jwtValidation