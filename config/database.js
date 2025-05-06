const mongoose=require("mongoose")
require("dotenv").config()

const database=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>(console.log("Database Successfully Connected")))
    .catch((error)=>{
        console.log("Issue in Db connection")
        console.log(error.message)
        process.exit(1)
    })
}

module.exports=database