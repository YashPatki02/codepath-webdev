import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);

    // useEffect(() => {
    //     const getCoinPrice = async () => {
    //         const response = await fetch(
    //             `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`
    //         );
    //         const data = await response.json();
    //         setPrice(data);
    //     };
    //     getCoinPrice().catch(console.error);
    // }, [symbol]);

    return (
        <li className="main-list">
            <Link
                to={`/coinDetails/${symbol}`}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <img
                    className="icons"
                    src={`https://www.cryptocompare.com${image}`}
                    alt={`Small icon for ${name} crypto coin`}
                />
                <p>{name}</p>
            </Link>
        </li>
    );
};

export default CoinInfo;
