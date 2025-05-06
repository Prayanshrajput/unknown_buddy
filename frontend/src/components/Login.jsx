import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {
  const[inputdata,setinputdata]=useState({email:"",password:""})

  const inputhandler=(event)=>{
    setinputdata((prev)=>{return {...prev,[event.target.name]:event.target.value}})
    console.log(inputdata)
  }

    const fetchdata=async()=>{
      if(inputdata.email==""){
        toast.warning("Enter Your Email Id")
      }
      else if(inputdata.password==""){
        toast.warn("Enter Your Password")
      }
      else{
        try{
          const response=await fetch("http://localhost:3000/login",{
            method:"POST",
            body:JSON.stringify(inputdata),
            headers:{
          "Content-Type":"application/json"
        }
          })

          const res=await response.json();
          console.log(res)
          if(res.success){
            toast.success("Login sucessfully")

          }
          else{
            toast.warn("Something went Wrong please try letter")
          }
      }
      catch(error){
        console.log(error.message)
        toast.error("Server Overloaded or Internet issue")
      }
      }
      
    }



return (
  <div className="flex justify-center items-center w-screen h-[92vh] p-4 bg-gray-100">
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl h-[90%] bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="hidden lg:flex w-1/2 bg-white h-full">
        <img src="./logo.png" alt="Login" className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6 h-full">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back to Unknown buddy</h1>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          <div>
            <label className="block text-lg font-semibold">Enter Your Email</label>
            <input type="email" name='email' onChange={inputhandler} placeholder="Enter Your Email" className="w-full p-3 bg-gray-100 rounded-lg mt-1 focus:outline-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold">Enter Your Password</label>
            <input type="password" name='password' onChange={inputhandler} placeholder="Enter Your Password" className="w-full p-3 bg-gray-100 rounded-lg mt-1 focus:outline-none" />
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between w-full text-sm mt-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="w-4 h-4" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#" className="text-blue-600">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button onClick={fetchdata} className="w-full  py-3 mt-4 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-all">Login</button>

        {/* Divider */}
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center w-full py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
          <img src="./google.png" alt="Google" className="w-6 h-6 mr-2" />
          <span className="text-lg">Login with Google</span>
        </button>

        {/* Signup Redirect */}
        <p className="mt-4 text-sm">Don't have an account? <a href="/singup" className="text-blue-600 font-bold">Sign Up</a></p>
      </div>
    </div>
    <ToastContainer />
  </div>
);

}
