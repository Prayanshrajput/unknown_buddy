import React from 'react'

export const Contectinfo = ({data,onClick}) => {
  
  return (
    <div onClick={onClick} className='flex w-full h-[10vh] gap-5 items-center  hover:bg-gray-500'>
        {/* profile photo */}
        <div className='flex w-[60px] h-[60px] rounded-full bg-blue-400'>

        </div>
        {/* details */}
        <div className='flex flex-col w-fit h-[60px]'>
            {/* Name */}
            <div className='font-bold'>{data.name ||"unknown"}</div>
            {/* Last message */}
            <div>{data.lastmessage || "start chatting"}</div>
        </div>
    </div>
  )
}
