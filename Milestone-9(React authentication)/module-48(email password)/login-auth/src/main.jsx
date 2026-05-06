import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import Login from './login/Login.jsx';
import Home from './home/Home.jsx';
import Register from './register/Register.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {
        index:true,
        path:'/',
        Component: Home,
      },
      {
        path:'login',
        Component: Login,
      },
      {
        path:'register',
        Component: Register,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
