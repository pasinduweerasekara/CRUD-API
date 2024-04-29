const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/produt.route.js')
const app = express()

// middleware
app.use(express.json())
// routes
app.use('/api/products',productRoute)

    mongoose.connect("mongodb+srv://admin:gMZpLY6VjMvhUVcu@backenddb.j11cdvz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(
        app.listen(4000,()=>{
            console.log("Conneccted to the database Listning on port 4000");
        })
    ).catch(error=>{
        console.log(error);
    })