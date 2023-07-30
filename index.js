import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'


import supermarketRoute from './routes/supermarketRoute.js'
import productRoute from './routes/productRoute.js'
import customerRoute from './routes/customerRoute.js'
import orderRoute from './routes/orderRoute.js'
import itemRoute from './routes/itemRoute.js'
import authRoute from './routes/authRoutes.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin: true,
    Credentials: true
}

// database connection
mongoose.set('strictQuery', false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDb database connected')
    } catch (error) {
        console.log(`Failed to connect to MongoDb ${error}`)
    }
}

// for testing
app.get("/", (req,res)=>{
    res.send("api working")
} )

// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

// routes

app.use('/auth', authRoute)
app.use('/supermarkets', supermarketRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)
app.use('/items', itemRoute)

app.listen(port, () =>{
    connect()
    console.log(`server listening on port ${port}`)
})