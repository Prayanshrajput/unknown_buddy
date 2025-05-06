import {useState} from 'react'
import { toast,ToastContainer } from 'react-toastify'

export const Forgot_password = () => {
const [data,setdata]=useState({email:""})

const inputhandler=(event)=>{
  setdata((prev)=>{return {...prev,[event.target.name]:event.target.value}})
  console.log(data)
}
const sendotp=async()=>{
try{
      const response=await fetch("",{
        method:"POST",
        body:JSON.stringify(data),
        headers:""
      })

      const res=await response.json();

}
catch(error){
  toast.error(error.message)
}
}

  return (
   <div className='flex w-screen h-screen justify-center items-center'>
          <div className='flex  flex-col py-2 gap-4 w-[50vw] min-h-fit h-[48vh] justify-center rounded-lg bg-purple-200 shadow-slate-400 shadow-lg items-center'>
            <div className='flex text-[2vw] gap-4 font-semibold text-[#cd3ecd]'>CHANGE YOUR PASSWORD</div>
              <label className='w-[30vw] text-[4vw] lg:text-[20px]'>Enter your email</label>
              <input className='w-[30vw]  py-2 px-2 rounded-lg' type="text" name="email" id="" onChange={inputhandler} placeholder='Enter your email' />
  
              <div className='flex px-4 py-2 hover:bg-blue-600 bg-blue-400 font-bold rounded-lg'>Send Otp</div>
          </div>
          <ToastContainer></ToastContainer>
   </div>
  )
}
