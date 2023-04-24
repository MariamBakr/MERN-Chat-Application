const express = require ('express')
const chats=require('./data/data')
const dotenv=require('dotenv')
const connectDB = require('./config/db')
const userRoutes= require('./routes/userRoutes')

const app = express()
dotenv.config()
connectDB()
app.get('/',(req,res)=>{
    res.send("API is running...")
})
app.get('/api/chat',(req,res)=>{
    res.send(chats)
})
app.get('/api/chat/:id',(req,res)=>{
    const singleChat=chats.find((c)=>c._id===req.params.id)
    res.send(singleChat)
})

app.use('/api/user',userRoutes)
const PORT=process.env.PORT||5000
app.listen(PORT,console.log(`server running on port ${PORT}...`))
