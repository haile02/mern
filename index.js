const express=require("express");
const helmet=require("helmet")
const cors=require('cors')
const cookieParser=require("cookie-parser");
const mongoose=require('mongoose');
const authRouter=require('./routers/authRouter.js')

const app=express();
app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected successfully!!");
}).catch(err=>{
   console.log(err);
})
app.use('/api/auth', authRouter)
app.get('/', (req , res)=>{
    res.json({message:"hello from server!"})
})
app.listen(process.env.PORT,()=>{
    console.log("server listening on port")
})