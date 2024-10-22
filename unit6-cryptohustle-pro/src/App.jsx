import './App.css'
import React, { useEffect, useState } from "react";
import CoinInfo from "./components/CoinInfo";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [list, setList] = useState(null);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchAllCoinData = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${API_KEY}`
            );
            const data = await response.json();
            setList(data);
        };
        fetchAllCoinData().catch(console.error);
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchValue !== "") {
            const filteredData = Object.keys(list.Data).filter((item) =>
                list.Data[item].FullName.toLowerCase().includes(
                    searchValue.toLowerCase()
                )
            );
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(Object.keys(list.Data));
        }
    };

    return (
        <div className="whole-page">
            <h1>My Crypto List</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(inputString) =>
                    searchItems(inputString.target.value)
                }
            />
            <ul>
                {searchInput.length > 0
                    ? filteredResults.map((coin) =>
                          list.Data[coin].PlatformType === "blockchain" ? (
                              <CoinInfo
                                  key={coin}
                                  image={list.Data[coin].ImageUrl}
                                  name={list.Data[coin].FullName}
                                  symbol={list.Data[coin].Symbol}
                              />
                          ) : null
                      )
                    : list &&
                      Object.entries(list.Data).map(([coin, coinData]) =>
                          coinData.PlatformType === "blockchain" ? (
                              <CoinInfo
                                  key={coin}
                                  image={coinData.ImageUrl}
                                  name={coinData.FullName}
                                  symbol={coinData.Symbol}
                              />
                          ) : null
                      )}
            </ul>
        </div>
    );
}

export default App;