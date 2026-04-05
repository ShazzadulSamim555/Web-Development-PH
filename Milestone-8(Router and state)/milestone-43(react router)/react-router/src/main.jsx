import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Mobile from './Components/Mobile.jsx';
import Laptops from './Components/Laptops.jsx';


const router= createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>My name is Samim</div>
  // },

  {
    path: 'about',
    element: <h3>About section</h3>
  },

  {
    path: 'app',
    Component: App
  },

  {
    path:'/',
    element:<Root></Root>,
    children:[
      {index: true, Component: Home},
      {
        path:'mobile', Component: Mobile,
      },
      {
        path: 'laptop', Component: Laptops
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
