/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
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

    useEffect(() => {
        fetchCoinData();
    }, [currency])

    if (coinData) {
        return (
            <div>
                <img src={coinData?.image?.large} alt="" />
                <h1>{coinData?.name} - {coinData?.symbol.toUpperCase()}</h1>
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