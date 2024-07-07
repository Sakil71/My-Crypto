import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/vite.svg";
import { useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { AiFillCloseSquare } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext);
    const [open, setOpen] = useState(false);

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd": {
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            }
            case "eur": {
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            }
            default: {
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            }
        }
    }

    return (
        <div className="flex justify-between items-center py-2 mb-5">
            <Link to='/'>
                <div className="flex items-center gap-2">
                    <img className="w-8" src={logo} alt="" />
                    <h1 className="text-2xl font-bold">My Crypto</h1>
                </div>
            </Link>

            <div onClick={() => setOpen(false)}
                className={`${open ?
                    'bg-indigo-950 text-white top-16'
                    :
                    'top-[-500px]'
                    } 
                    absolute duration-700 left-0 lg:static flex flex-col md:flex-col lg:flex-row gap-4 md:gap-10 lg:gap-10 font-medium w-full md:w-full lg:w-auto min-h-[50vh] md:min-h-[50vh] lg:min-h-0 p-20 md:p-20 lg:p-0 z-30`}>

                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/features'>Features</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/pricing'>Price</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/blog'>Blog</NavLink>
            </div>

            <div className="flex gap-4 items-center">
                <select onChange={currencyHandler} name="" id="" className="border rounded font-medium outline-none text-sm">
                    <option className="text-sm" value="usd">USD</option>
                    <option className="text-sm" value="eur">EUR</option>
                </select>

                <button className="border border-blue-950 rounded text-sm px-4 py-1 font-medium hover:bg-blue-950 hover:text-white">Sign Up</button>
            </div>

            <div onClick={() => setOpen(!open)} className='text-3xl cursor-pointer lg:hidden z-40'>
                {
                    open ? <AiFillCloseSquare className='text-red-500'></AiFillCloseSquare> : <IoMenu />
                }
            </div>

        </div>
    );
};

export default Navbar;