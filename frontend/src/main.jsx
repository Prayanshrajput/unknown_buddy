import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import {Profile} from './components/Profile.jsx'
import { Login } from './components/Login.jsx'
import { Singup } from './components/Singup.jsx'
import { Forgot_password } from './components/Forgot_password.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Layout } from './Layout.jsx'
import { Chat } from './components/Chat.jsx'
import { Contect } from './components/Contect.jsx'
import Request from './components/Request.jsx'
import AppContextProvider from './context/Appcontext.jsx'
import Screen_share from './components/Screen_share.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"singup",
        element:<Singup></Singup>
      },
      {
        path:"forgot_password",
        element:<Forgot_password></Forgot_password>
      },
      {
        path:"/chat",
        element:<Contect></Contect>
      },
      {
        path:"/request",
        element:<Request></Request>
      },
      {
        path:"/screen",
        element:<Screen_share></Screen_share>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
     <RouterProvider router={router}>
     </RouterProvider>
  </AppContextProvider>
 
)
