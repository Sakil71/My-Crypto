import { useContext } from "react";
import Pricing from "../Pricing/Pricing";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
    const {input, setInput, allCoin, setDisplayCoin} = useContext(CoinContext);

    const inputHandler = (event) =>{
        setInput(event.target.value);
        if(event.target.value === ""){
            setDisplayCoin(allCoin);
        }
    }
    const searchHandler = async (event) =>{
        event.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase());
        })
        setDisplayCoin(coins);
    }
    return (
        <div className="text-center my-20">
            <h1 className="text-4xl font-bold mb-2">Largest Crypto Marcketplace</h1>
            <p>Welcome to the world largest crypto currency marcketplace. Sign up to explore more about cryptos.</p>

            <form onSubmit={searchHandler}>
                <input onChange={inputHandler} value={input} required placeholder="btc" type="search" name="" id="" className="border border-blue-950 px-5 py-1 rounded mt-8 w-[70%] md:w-[50%] lg:w-[50%] outline-none bg-gray-700 text-white" />
                <button className="px-4 py-1 border rounded bg-gray-900 text-white" type="submit">Search</button>
            </form>

            <Pricing></Pricing>
        </div>
    );
};

export default Home;