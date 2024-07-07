import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

// eslint-disable-next-line react/prop-types
const CoinContextProvider = ({ children }) => {
    const [allCoin, setAllCoin] = useState([]);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');
    const [currency, setCurrency] = useState(
        {
            name: "usd",
            symbol: "$"
        }
    )

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-PvBFJuWDrSw1beu6LHarcZNh' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency])

    const value = {
        allCoin, currency, setCurrency, input, setInput, displayCoin, setDisplayCoin
    }
    return (
        <CoinContext.Provider value={value}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;