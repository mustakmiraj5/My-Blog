import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router_way1 from '../api/routers/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("MongoDB is connected!!!")
}).catch(err => console.log(err))

const app = express()

app.listen(3000, () => {
    console.log('Server is running..!!!')
})


app.get('/', (req, res) => {
    res.json({msg:'API is working'})
})

app.use('/api/user', router_way1)
// the route in router_way1 is /test. so full path will be /api/user/test