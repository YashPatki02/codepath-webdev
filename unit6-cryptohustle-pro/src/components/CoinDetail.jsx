import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinDetail = () => {
    const { symbol } = useParams(); // Get the coin symbol from the URL
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const getCoinDetail = async () => {
            try {
                const detailsResponse = await fetch(
                    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${API_KEY}`
                );
                const descriptionResponse = await fetch(
                    `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}&api_key=${API_KEY}`
                );

                const detailsJson = await detailsResponse.json();
                const descripJson = await descriptionResponse.json();

                setFullDetails({
                    numbers: detailsJson.DISPLAY,
                    textData: descripJson.Data,
                });
            } catch (error) {
                console.error(error);
            }
        };

        getCoinDetail();
    }, [symbol]);

    if (!fullDetails) return <div>Loading...</div>;

    const coinData = fullDetails.textData[symbol];
    const priceData = fullDetails.numbers[symbol].USD;

    return (
        <div>
            <h1>{coinData.FullName}</h1>
            <img
                className="images"
                src={`https://www.cryptocompare.com${priceData.IMAGEURL}`}
                alt={`Icon for ${symbol}`}
            />
            <div>{coinData.Description}</div>
            <table>
                <tbody>
                    <tr>
                        <th>Launch Date</th>
                        <td>{coinData.LaunchDate}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <td>{coinData.AssetWebsiteUrl}</td>
                    </tr>
                    <tr>
                        <th>Market Cap</th>
                        <td>{priceData.MKTCAP}</td>
                    </tr>
                    <tr>
                        <th>Today's Open</th>
                        <td>{priceData.OPENDAY}</td>
                    </tr>
                    <tr>
                        <th>Volume</th>
                        <td>{priceData.VOLUME24HOURTO}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CoinDetail;
