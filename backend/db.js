const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://athif:Ryzenathif@cluster0.t5pyu.mongodb.net/athifcars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose