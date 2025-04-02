import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Models/user.js";

export const register = async (req, res) =>{
    const { password, username, role, email } = req.body

    // Confirm data
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    const duplicate = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }


    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
    let newUser = {
        username: username,
        password: hashedPwd,
        role: role,
        email: email
    };
    
    
    

    // Create and store new user 
    const user = await User.create(newUser)

    if (user) { //created 
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }

};



export const login = async (req, res) => {
    const { username, password } = req.body
    

    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.find({ username: username }).exec()
    

    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
 
    const match = await bcrypt.compare(password, foundUser[0].password)

    if (!match) return res.status(401).json({ message: 'Unauthorized' })

    
        
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "username": foundUser[0].username,
                "roles": foundUser[0].role,
                "userId": foundUser[0]._id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    )
    
    // Create secure cookie with access token 
    res.cookie('jwt', accessToken, {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: 'None', //cross-site cookie 
        maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    })

    // Send accessToken containing username and roles 
    res.json({ accessToken })
};


export const logout = async (req,res) =>{
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' });
};