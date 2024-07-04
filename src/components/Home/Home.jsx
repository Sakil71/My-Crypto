import Pricing from "../Pricing/Pricing";

const Home = () => {
    return (
        <div className="text-center my-20">
            <h1 className="text-4xl font-bold mb-2">Largest Crypto Marcketplace</h1>
            <p>Welcome to the world largest crypto currency marcketplace. Sign up to explore more about cryptos.</p>

            <div>
                <input placeholder="btc" type="search" name="" id="" className="border border-blue-950 px-5 py-1 rounded mt-8 w-[50%] outline-none bg-gray-700 text-white" />
                <button className="px-4 py-1 border rounded bg-gray-900 text-white" type="button">Search</button>
            </div>

            <Pricing></Pricing>
        </div>
    );
};

export default Home;