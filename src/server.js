const express = require('express')

const app =  express()

app.get('/', (req,res)=>{
    console.log("server is up and running ...")
    res.statusCode = 404
    res.json({message:"hello"})
})

module.exports = app
