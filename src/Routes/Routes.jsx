import { createBrowserRouter } from "react-router-dom";

import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyOrders from "../Pages/MyOrders/MyOrders";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        },{
            path: '/login',
            element: <Login></Login>
        },{
            path: '/signUp',
            element:<SignUp></SignUp>
            
        },{
            path:'/checkOut/:id',
            element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            
        },{
            path: '/orders',
            element:<PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
        }
    
    
    ]


    }

]);
export default router