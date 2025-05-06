const profile=require("../models/profile")

exports.profile_update=async(req,res)=>{
    let{username,email,newemail}=req.body

    const findprofile=await profile.findOneAndUpdate({email},{email:newemail,username,updatedAt:Date.now()})

    if(!findprofile){
        return res.json({
            success:false,
            message:"Error in file updations",
        })
    }

    res.json({
        success:true,
        message:"Profile successfully updated"
    })
}

exports.temp=async(req,res)=>{
    try{
        const data=await profile.find()
        res.json({
            success:true,
            message:"Successfully fetch the data",
            data:data
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Some error in server",
            issue:error.message
        })
    }
}