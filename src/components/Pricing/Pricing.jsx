import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";

const Pricing = () => {
    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    return (
        <div className="overflow-x-auto w-[80%] my-20 mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Coins</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Marcketcap</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayCoin.map((item, index) => <tr key={index}>
                            <td className="font-bold">{item?.market_cap_rank}</td>
                            <td className="flex items-center gap-2">
                                <img src={item?.image} className="w-8" alt="" />
                                <p className="font-bold">{item?.name}</p>
                                <p className="font-bold">({item?.symbol})</p>
                            </td>

                            <td className="font-bold">{currency.symbol}{item?.current_price}</td>
                            <td className={`${item?.price_change_24h > 0 ? "text-green-700" : "text-red-700"} font-bold`}>{item?.price_change_24h.toFixed(2)}</td>
                            <td className="font-bold">{currency?.symbol}{(item?.market_cap / 1000000).toFixed(2)} M</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Pricing;