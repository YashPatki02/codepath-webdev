import React from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <div className="radio-buttons">
            {choices &&
                choices.map((choice) => (
                    <li key={choice}>
                        <input
                            id={choice}
                            value={choice}
                            name={label} // name corresponds to the ingredient type (e.g., temperature, milk)
                            type="radio"
                            onChange={handleChange} // Trigger state update in the parent component
                            checked={checked === choice} // Checked if current selection matches
                        />
                        {choice}
                    </li>
                ))}
        </div>
    );
};

export default RecipeChoices;
