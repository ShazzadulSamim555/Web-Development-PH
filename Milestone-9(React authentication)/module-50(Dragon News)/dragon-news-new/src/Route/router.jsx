import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/category/:id',
        element:<CategoryNews></CategoryNews>,
        loader: async()=>{
          const res= await fetch('/news.json');
          const data= await res.json();
          return data;
        },
      }

    ],
  },
  {
    path:'/*',
    element: <p>Error page 404</p>
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element: <Login></Login>
      },
      {
        path:"/auth/registration",
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'news',
    element: <h1>News Section</h1>
  }
]);

export default router;
