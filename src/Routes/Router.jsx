import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({params}) => fetch(`https://car-with-mongodb-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
            }
        ]
    }
])

export default router 