import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './routes/Root.jsx'
import Home from './component/Home.jsx'
import Login from './login/Login.jsx'
// import './tailwind.css';


const router= createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {
        index:true,
        path:'/',
        Component:Home,
      },
      {
        path: 'login',
        Component: Login,
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
