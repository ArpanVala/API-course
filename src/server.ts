import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'

const app =  express()

app.use(morgan('dev'))

// custome Middleware
// app.use((req,res,next)=>{
//     req.this_is_some_random_parameter_name = 'This is value'
//     next();
// })


app.get('/', (req,res)=>{
    console.log("server is up and running ...")
    res.statusCode = 404
    res.json({message:"hello"})
})

app.use('/api', protect,router)

export default(app)
