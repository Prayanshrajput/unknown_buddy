const express=require("express")

const route=express.Router();

const{sing_up}=require("../controls/sing_up");
const { login } = require("../controls/login");
const { profile_update, temp } = require("../controls/profile_update");
const { forgotpassword } = require("../controls/forgot");

route.post("/create",sing_up)
route.post("/login",login)
route.post("/updateprofile",profile_update)
route.post("/changepassword",forgotpassword)
route.get("/home",temp)

module.exports=route