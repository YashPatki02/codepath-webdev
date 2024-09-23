import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
    return (
        <div className="App">
            <h1>Timetabled. Itinerary for 7 Days of Interview Prep 💡</h1>
            <h2>
                One week to prepare for technical, behavioural, hardware, and
                any other kind of interview that exists.
            </h2>
            <Calendar />
        </div>
    );
};

export default App;
