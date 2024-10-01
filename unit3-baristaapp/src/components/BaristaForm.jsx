import React, { useState } from "react";
import drinksJson from "../drinks.json";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        temperature: "",
        milk: "",
        syrup: "",
        blended: "",
    });
    const [currentDrink, setCurrentDrink] = useState("");
    const [trueRecipe, setTrueRecipe] = useState({});
    const [checkedTemperature, setCheckedTemperature] = useState("");
    const [checkedSyrup, setCheckedSyrup] = useState("");
    const [checkedMilk, setCheckedMilk] = useState("");
    const [checkedBlended, setCheckedBlended] = useState("");

    const ingredients = {
        temperature: ["hot", "lukewarm", "cold"],
        syrup: [
            "mocha",
            "vanilla",
            "toffee",
            "maple",
            "caramel",
            "other",
            "none",
        ],
        milk: ["cow", "oat", "goat", "almond", "none"],
        blended: ["yes", "turbo", "no"],
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(
            Math.random() * drinksJson.drinks.length
        );
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    const onNewDrink = () => {
        setInputs({
            temperature: "",
            milk: "",
            syrup: "",
            blended: "",
        });
        setCheckedTemperature("");
        setCheckedSyrup("");
        setCheckedMilk("");
        setCheckedBlended("");
        getNextDrink();
    };

    const onCheckAnswer = () => {
        if (trueRecipe.temperature !== inputs["temperature"]) {
            setCheckedTemperature("wrong");
        } else {
            setCheckedTemperature("correct");
        }

        if (trueRecipe.syrup !== inputs["syrup"]) {
            setCheckedSyrup("wrong");
        } else {
            setCheckedSyrup("correct");
        }

        if (trueRecipe.milk !== inputs["milk"]) {
            setCheckedMilk("wrong");
        } else {
            setCheckedMilk("correct");
        }

        if (trueRecipe.blended !== inputs["blended"]) {
            setCheckedBlended("wrong");
        } else {
            setCheckedBlended("correct");
        }
    };

    return (
        <div>
            <h1>Hi, I'd like to order a:</h1>

            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button className="button newdrink" onClick={onNewDrink}>
                    🔄
                </button>
            </div>

            {/* Form starts here */}
            <form className="container" onSubmit={(e) => e.preventDefault()}>
                {/* Temperature Section */}
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={checkedTemperature}>
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                    />
                </div>

                {/* Milk Section */}
                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={checkedMilk}>
                        {inputs["milk"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                {/* Syrup Section */}
                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={checkedSyrup}>
                        {inputs["syrup"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>

                {/* Blended Section */}
                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={checkedBlended}>
                        {inputs["blended"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>

                <button className="button check-answer" onClick={onCheckAnswer}>
                    Check Answer
                </button>
            </form>
        </div>
    );
};

export default BaristaForm;
