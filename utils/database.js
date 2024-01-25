const mongoose = require("mongoose")

const connectDB = async() => {
    
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Succcess to conect to DB")

    }catch(err){

        console.log("Failure")
        throw new Error

    }
}

module.exports = connectDB