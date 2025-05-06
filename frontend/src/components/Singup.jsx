import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const Singup = () => {

   const[inputdata,setinputdata]=useState({username:"",email:"",password:""})
  
    const inputhandler=(event)=>{
      setinputdata((prev)=>{return {...prev,[event.target.name]:event.target.value}})
      console.log(inputdata)
    }
  
      const fetchdata=async()=>{
        console.log("ha bhai")
        if(inputdata.username.length==0){
          toast.warn("Please Enter your username")
        }
        else if(inputdata.email.length==0) {
          toast.warning("Please Enter your mail")
        }
        else if(inputdata.password.length==0){
          toast.warning("Please Enter your password")
        }
        else{
          try{
            const response=await fetch("http://localhost:3000/create",{
            method:"POST",
            body:JSON.stringify(inputdata),
           headers:{
            "Content-Type":"application/json"
          }
            })
  
            const res=await response.json();
           if(res.success==true){
              toast.success("Account created")
            }
            else{
              toast.warn(res.message)
            }
        }
        catch(error){
          toast.error("Some problem in server")
          console.log(error.message)
        }
        }
       
      }
  
    // return (
    //   <div className='flex w-screen h-screen justify-center items-center'>
  
    //       <div className='flex w-[45vw] h-[65vh]  rounded-lg flex-col justify-center items-center gap-3 border shadow-gray-400 border-gray-300 shadow-2xl bg-gray-300'>
    //           <div className='flex text-[30px] font-bold text-[#4f4ff2] mt-3'>WELCOME FOR SKILLUP</div>
    //           <lavel className="flex text-[20px] w-[70%]">Enter your Name</lavel>
    //           <input type="text" className='p-2  rounded-lg w-[70%] ' name='username' onChange={inputhandler} placeholder='Enter your email id' />
    //           <lavel className="flex text-[20px] w-[70%]">Enter your Email</lavel>
    //           <input type="text" className='p-2  rounded-lg w-[70%] ' name='email' onChange={inputhandler} placeholder='Enter your email id' />
    //           <label className="flex text-[20px] w-[70%]">Enter your Password</label>
    //           <input type="text" className='p-2 rounded-lg w-[70%] ' name='password' onChange={inputhandler} placeholder='Enter your password' />
    //           <div className='flex px-8 py-2 rounded-lg text-[18px] font-bold bg-green-400' onClick={fetchdata} >Sing Up</div>
    //           <span>login</span>
    //       </div>
    //   </div>
    // )

    return (
  <div className="flex justify-center items-center w-screen lg:h-[92vh] h-[96vh]  p-4 bg-gray-100">
    <div className="flex flex-col lg:flex-row items-center justify-center  w-full max-w-5xl h-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="hidden lg:flex w-1/2 bg-white">
        <img src="./logo.png" alt="Login" className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2  h-full p-6">
        <h1 className="text-2xl font-bold text-center mb-10 lg:my-2">Welcome to Unknown buddy</h1>

        {/* Input Fields */}
        <div className="w-full space-y-3">
          <div>
            <label className="block text-lg font-semibold">Enter Your Name</label>
            <input type="text" name='username' value={inputdata.username} onChange={inputhandler} placeholder="Enter Your Full Name" className="w-full p-3 bg-gray-100 rounded-lg mt-1 focus:outline-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold">Enter Your Email</label>
            <input type="email" name='email' value={inputdata.email} onChange={inputhandler} placeholder="Enter Your Email" className="w-full p-3 bg-gray-100 rounded-lg mt-1 focus:outline-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold">Enter Your Password</label>
            <input type="password" value={inputdata.password} name='name' onChange={inputhandler} placeholder="Enter Your Password" className="w-full p-3 bg-gray-100 rounded-lg mt-1 focus:outline-none" />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center space-x-2 w-full mt-4">
          <input type="checkbox" id="terms" className="w-4 h-4" />
          <label htmlFor="terms" className="text-sm">I agree to all terms & conditions</label>
        </div>

        {/* Signup Button */}
        <button onClick={fetchdata} className="w-full py-3 mt-4 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-all">Sign Up</button>

        {/* Divider */}
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup */}
        <button className="flex items-center justify-center w-full py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
          <img src="./google.png" alt="Google" className="w-6 h-6 mr-2" />
          <span onClick={()=>{alert("ha bhai karle google ka use")}} className="text-lg">Sign up with Google</span>
        </button>

        {/* Login Redirect */}
        <p className="mt-4 text-sm">Already have an account? <a href="/login" className="text-blue-600 font-bold">Login</a></p>
      </div>
      <ToastContainer />
    </div>
  </div>
);
}
