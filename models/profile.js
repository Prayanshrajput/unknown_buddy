const mongoose=require("mongoose")

const profile=new mongoose.Schema({
  username:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  createdAt:{
    type:Date,
    require:true,
    default:Date.now()
  },
  updatedAt:{
    type:Date,
    require:true,
    default:Date.now()
  }
})

module.exports=mongoose.model("profile",profile)