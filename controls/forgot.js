const profile=require("../models/profile")
const bycrpt=require("bcryptjs")

exports.forgotpassword=async(req,res)=>{
    let{email,password}=req.body

    const finduser=await profile.findOne({email})

    if(!finduser){
        return res.json({
            success:false,
            message:"bhai pahle account to bANA LE"
        })
    }


    try{
        password=await bycrpt.hash(password,10)
    }
    catch(error){
        res.json({
            success:false,
            message:"Error in hassing passward"
        })
    }

    await profile.findOneAndUpdate({email},{password,updatedAt:Date.now()})

    res.json({
        success:true,
        message:"Password change Successfully"
    })

}

