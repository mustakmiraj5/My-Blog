import User from "../models/user.model.js"

export const signUp_post = async(req, res) => {
    const {username, email, password} = req.body

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({message:"All fields are required"})
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
        res.status(500).json({msg:error.message})
    }
    

    
}