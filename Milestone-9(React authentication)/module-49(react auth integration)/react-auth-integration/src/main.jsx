import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Login from './component/login/Login.jsx';
import Registration from './component/register/Registration.jsx';
import AuthProvider from './context/AuthProvider.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {
        index: true,
        path:'/',
        Component:Home,
      },
      {
        path:'login',
        Component: Login,
      },
      {
        path:'registration',
        Component: Registration,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
