import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Pricing from "../components/Pricing/Pricing";
import Coin from "../components/Coin/Coin";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: 'coin/:coinId',
                element: <Coin></Coin>
            }
        ]
    }
])