import express from 'express'

const app =  express()

app.get('/', (req,res)=>{
    console.log("server is up and running ...")
    res.statusCode = 404
    res.json({message:"hello"})
})

export default(app)
