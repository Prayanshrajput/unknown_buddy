const profile=require("../models/profile")
const bycrpt=require("bcryptjs")

exports.login=async (req,res)=>{
    const{email,password}=req.body

    const status=await profile.findOne({email})

    if(!status){
        return res.json({
            success:false,
            message:"Account is not exits"
        })
    }

    const temppass= status.password;
    let match=false;

    try{
        match= await bycrpt.compare(password,temppass)
    }
    catch(error){
        return res.json({
            success:false,
            message:"Problem in password matching",
            issue:error.message
        })
    }

    if(!match){
        return res.json({
            success:false,
            message:"Wrong password"
        })
    }

    res.json({
        success:true,
        message:"login successfully"
    })
}
