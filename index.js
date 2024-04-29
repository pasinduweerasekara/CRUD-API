const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/produt.route.js')
require('dotenv').config()
const app = express()

// middleware
app.use(express.json())
// routes
app.use('/api/products',productRoute)

    mongoose.connect(process.env.MONGO_URI).then(
        app.listen(process.env.PORT,()=>{
            console.log("Conneccted to the database Listning on port ",process.env.PORT);
        })
    ).catch(error=>{
        console.log(error);
    })