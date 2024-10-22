// components/CoinInfo.jsx
import React from "react";
import { Link } from "react-router-dom";

const CoinInfo = ({ symbol, name, price }) => {
    return (
        <Link style={{ color: "white" }} to={`/coinDetails/${symbol}`}>
            {name} <span className="tab"></span> ${price.USD} USD
        </Link>
    );
};

export default CoinInfo;
