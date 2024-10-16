const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const comic=require('./routes/comic')


dotenv.config()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api/comic',comic)



app.use((req,res,next)=>{
    res.status(404).json({
        success:false,
        message:"Page not found"
    })
})


mongoose.connect(process.env.MONGO_URL)
.then(async ()=>{
    console.log('DB Connected')
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>console.log(err))