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
    },
    {
        path : '*',
        element: <div className="flex justify-center items-center w-full h-screen text-red-700 font-bold">
            <h1>404 | page not found</h1>
        </div>
    }
])