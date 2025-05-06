const profile=require("../models/profile")
const bycrpt=require("bcryptjs")

exports.sing_up = async(req,res)=>{

    let{username,email,password}=req.body
    const check= await profile.findOne({email});

    if(check){
        return res.json({
            success:false,
            message:"Already exit your account",
        })
    }
        try{
            password= await bycrpt.hash(password,10)
        }
        catch(error){
            return res.json({
                success:false,
                message:"Password hased problem",
                issue:error.message
            })
        }

    const newuser=profile({username,email,password});
    const saveuser= await newuser.save()

    res.json({
        success:true,
        message:"your account is successfuly created",
        data:saveuser
    })
}