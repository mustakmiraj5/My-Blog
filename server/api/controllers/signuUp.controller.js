import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";

export const signUp_post = async(req, res, next) => {
    const {username, email, password} = req.body

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, "All fields are required"))
    }

    const newUser = new User({
        username,
        email,
        password
    });

    try{
        await newUser.save()
        res.json({"res" : "Sign up successfull...!"})
    // res.json(newUser)
    }catch(error){
        // res.status(500).json({msg:error.message})
        next(error) //using middleware
    }
    

    
}