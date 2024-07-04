import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/vite.svg";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (e) =>{
        switch(e.target.value){
            case "usd": {
                setCurrency({name: 'usd', symbol: '$'});
                break;
            }
            case "eur": {
                setCurrency({name: 'eur', symbol: '€'});
                break;
            }
            case "tk": {
                setCurrency({name: 'tk', symbol: '৳'});
                break;
            }
            default : {
                setCurrency({name: 'usd', symbol: '$'});
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
            <div className="flex gap-6">
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/features'>Features</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/pricing'>Price</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold border-b-2' : 'font-medium'} to='/blog'>Blog</NavLink>
            </div>

            <div className="flex gap-4 items-center">
                <select onChange={currencyHandler} name="" id="" className="border rounded font-medium outline-none text-sm">
                    <option className="text-sm" value="usd">USD</option>
                    <option className="text-sm" value="eur">EUR</option>
                    <option className="text-sm" value="tk">TK</option>
                </select>

                <button className="border border-blue-950 rounded text-sm px-4 py-1 font-medium hover:bg-blue-950 hover:text-white">Sign Up</button>
            </div>

        </div>
    );
};

export default Navbar;