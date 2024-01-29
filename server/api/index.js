import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router_way1 from '../api/routers/user.route.js'
import signUp_auth from './routers/auth.router.js'

dotenv.config()

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("MongoDB is connected!!!")
}).catch(err => console.log(err))

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running..!!!')
})


app.get('/', (req, res) => {
    res.json({msg:'API is working'})
})

app.use('/api/user', router_way1)
// the route in router_way1 is /test. so full path will be /api/user/test

app.use('/api/auth', signUp_auth)

// Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server error!";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})