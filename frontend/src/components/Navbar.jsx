import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex w-[100vw] lg:h-[8vh] h-[8vh] rounded-sm overflow-hidden justify-around  bg-blue-600'>
      {/* Title */}
      <div className='flex justify-center items-center w-[20vw] lg:text-[2vw] text-[3vw] font-bold  text-white'>𝓤𝓷𝓴𝓷𝓸𝔀𝓷 𝓫𝓾𝓭𝓭𝔂</div>
      {/* routes */}
      <div className='flex justify-around items-center w-[40vw] h-full text-[2vw] lg:text-[1vw] text-white'>
      <NavLink className={({ isActive }) =>
    isActive ? 'flex px-2 py-1 shadow-orange-50 shadow-md rounded-lg' : 'flex px-2 py-1 hover:shadow-orange-50 shadow-md rounded-lg'} to={"/home"}>Home</NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? 'flex px-2 py-1 shadow-orange-50 shadow-md rounded-lg' : 'flex px-2 py-1 hover:shadow-orange-50 shadow-md rounded-lg'} to={"/chat"}>Chat</NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? 'flex px-2 py-1 shadow-orange-50 shadow-md rounded-lg' : 'flex px-2 py-1 hover:shadow-orange-50 shadow-md rounded-lg'} to={"/request"}>Request</NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? 'flex px-2 py-1 shadow-orange-50 shadow-md rounded-lg' : 'flex px-2 py-1 hover:shadow-orange-50 shadow-md rounded-lg'} to={"/profile"}>Profile</NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? 'flex px-2 py-1 shadow-orange-50 shadow-md rounded-lg' : 'flex px-2 py-1 hover:shadow-orange-50 shadow-md rounded-lg'} to={"/login"}>Login</NavLink>

      </div>
    </div>
  )
}
