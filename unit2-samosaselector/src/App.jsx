import { useState } from "react";
import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    const updateCount = () => {
        setCount(count + multiplier);
    };

    // Upgrade functions
    const buyDoubleStuffed = () => {
        if (count >= 10) {
            setMultiplier(multiplier * 2);
            setCount(count - 10); // Deduct cost
        } else {
            alert("Not enough samosas!");
        }
    };

    const buyPartyPack = () => {
        if (count >= 100) {
            setMultiplier(multiplier * 5);
            setCount(count - 100); // Deduct cost
        } else {
            alert("Not enough samosas!");
        }
    };

    const buyFullFeast = () => {
        if (count >= 1000) {
            setMultiplier(multiplier * 10);
            setCount(count - 1000); // Deduct cost
        } else {
            alert("Not enough samosas!");
        }
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Samosa Selector</h1>
                <h2>Count: {count}</h2>
                <img
                    className="samosa"
                    src="/samosa.jpg"
                    alt="Samosa"
                    onClick={updateCount}
                />
            </div>

            <div className="container">
                <div className="upgrade">
                    <h3>Double Stuffed 👯‍♀️</h3>
                    <p>2x per click</p>
                    <button onClick={buyDoubleStuffed}>Cost: 10 samosas</button>
                </div>

                <div className="upgrade">
                    <h3>Party Pack 🎉</h3>
                    <p>5x per click</p>
                    <button onClick={buyPartyPack}>Cost: 100 samosas</button>
                </div>

                <div className="upgrade">
                    <h3>Full Feast 👩🏽‍🍳</h3>
                    <p>10x per click</p>
                    <button onClick={buyFullFeast}>Cost: 1000 samosas</button>
                </div>
            </div>
        </div>
    );
};

export default App;
