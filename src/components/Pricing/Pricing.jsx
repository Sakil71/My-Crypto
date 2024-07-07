import { useContext, useEffect } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Pricing = () => {
    const { allCoin, currency, displayCoin, setDisplayCoin } = useContext(CoinContext);

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    return (
        <div className="overflow-x-auto w-[95%] md:w-[80%] lg:w-[80%] my-20 mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Coins</th>
                        <th className="hidden md:block lg:block">Price</th>
                        <th>24h Change</th>
                        <th className="hidden md:block lg:block">Marcketcap</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayCoin.map((item, index) => <tr key={index}>
                            <td>
                                <Link to={`/coin/${item?.id}`} className="flex items-center gap-2">
                                    <img src={item?.image} className="w-8" alt="" />
                                    <div>
                                        <h1 className="font-bold flex gap-2">{item?.name} -<p className="font-bold">{item?.symbol}</p></h1>
                                        <p className={`font-bold md:hidden lg:hidden`}>{currency.symbol}{item?.current_price}</p>
                                    </div>
                                </Link>
                            </td>

                            <td className="font-bold hidden md:block lg:block">{currency.symbol}{item?.current_price}</td>

                            <td className={`${item?.price_change_24h > 0 ? "text-green-700" : "text-red-700"} font-bold`}>{item?.price_change_24h.toFixed(2)}</td>

                            <td className="font-bold hidden md:block lg:block">{currency?.symbol}{(item?.market_cap / 1000000).toFixed(2)} M</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Pricing;