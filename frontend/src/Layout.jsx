import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
export const Layout = () => {
  return (
   <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}
