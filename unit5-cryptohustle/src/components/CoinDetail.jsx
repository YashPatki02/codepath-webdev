// components/CoinDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinDetail = () => {
    const { symbol } = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const fetchCoinDetails = async () => {
            const response = await fetch(
                `https://api.cryptoCompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${API_KEY}`
            );
            const data = await response.json();
            setFullDetails(data);
        };

        fetchCoinDetails();
    }, [symbol]);

    if (!fullDetails) return <div>Loading...</div>;

    const { CoinName, Description, Website, LaunchDate, MarketCap } =
        fullDetails[symbol];

    return (
        <div>
            <h1>{CoinName}</h1>
            <p>{Description}</p>
            <p>Launch Date: {LaunchDate}</p>
            <p>
                Website: <a href={Website}>{Website}</a>
            </p>
            <p>Market Cap: {MarketCap}</p>
        </div>
    );
};

export default CoinDetail;
