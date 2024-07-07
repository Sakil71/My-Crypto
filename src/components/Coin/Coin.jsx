/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../LineChart/LineChart';

const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(CoinContext);

    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-PvBFJuWDrSw1beu6LHarcZNh' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));
    }

    const fetchHistoriacalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-PvBFJuWDrSw1beu6LHarcZNh' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency?.name}&days=31&interval=daily`, options)
            .then(response => response.json())
            .then(response => setHistoricalData(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchCoinData();
        fetchHistoriacalData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])

    if (coinData && historicalData) {
        return (
            <div className='w-[98%] md:w-[80%] lg:w-[80%] mx-auto'>
                <div className='flex gap-2 items-center justify-center'>
                    <img className='w-10' src={coinData?.image?.large} alt="" />
                    <h1 className='text-xl font-bold'>{coinData?.name} - {coinData?.symbol.toUpperCase()}</h1>
                </div>
                <div className='border rounded mb-20 mt-5'>
                    <LineChart historicalData={historicalData}></LineChart>
                </div>

                <ul className='flex justify-between border-b mb-5 font-bold'>
                    <li>Crypto Market Rank</li>
                    <li>#{coinData?.market_cap_rank}</li>
                </ul>
                <ul className='flex justify-between border-b mb-5 font-bold'>
                    <li>Current Price</li>
                    <li> {currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                </ul>
                <ul className='flex justify-between border-b mb-5 font-bold'>
                    <li>Market Cap</li>
                    <li> {currency.symbol}{(coinData.market_data.market_cap[currency.name]/1000000).toLocaleString()}M</li>
                </ul>
                <ul className='flex justify-between border-b mb-5 font-bold'>
                    <li>24 Hour high</li>
                    <li> {currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                </ul>
                <ul className='flex justify-between border-b mb-5 font-bold'>
                    <li>24 Hour low</li>
                    <li> {currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                </ul>
                
            </div>
        )
    }
    else {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
};

export default Coin;