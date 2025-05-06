import React, { useState } from 'react'
import { Contectinfo } from './Contectinfo'
import { Chat } from './Chat'



export const Contect = () => {

   
    const[contectdetails,setcontectdetails]=useState()

    const info=[
        {
            name:"prayansh",
            lastmessage:"hii"
        },
        {
            name:"Rajneesh",
            lastmessage:"Hii"
        }
        ,{
            name:"Stayam",
            lastmessage:"Hello"
        },{
            name:"Vishal",
            lastmessage:"Hello"
        }
    ]
  

  return (
    <div className='flex justify-between  w-screen h-[90vh]'>
        {/* Contect list */}
            <div  className='flex flex-col pl-2 h-full  gap-2 w-[30%] '>
           {
            info.map((data,index)=>{
                return(
                    <Contectinfo key={index}  onClick={()=>{setcontectdetails(data)}} data={data}></Contectinfo>
                )
            })
           }
               
            </div>

         {/* Selected Contect for chat */}
         <div className='flex flex-col w-[67%] h-full bg-gray-200 '>
                {
                    contectdetails?<Chat recipientName={contectdetails.name}></Chat>:<div className='flex w-full h-full justify-center text:[20px] lg:text-[30px] items-center font-bold'>Select your contect</div>
                }
         </div>
    </div>
  )
}
