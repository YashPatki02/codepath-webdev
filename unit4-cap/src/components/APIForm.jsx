import React from "react";

const APIForm = ({ inputs, handleChange, onSubmit }) => {
    const inputsInfo = [
        "Input a link to any website. No protocol needed (e.g., 'example.com').",
        "Preferred format: jpeg, png, or webp.",
        "Hide ads? (true/false)",
        "Hide cookie banners? (true/false)",
        "Choose width (in pixels).",
        "Choose height (in pixels).",
    ];

    return (
        <div>
            <h2>Select Your Image Attributes:</h2>
            <form className="form-container">
                {inputs &&
                    Object.entries(inputs).map(([category, value], index) => (
                        <li className="form" key={index}>
                            <h2>{category}</h2>
                            <input
                                type="text"
                                name={category}
                                value={value}
                                placeholder="Input this attribute..."
                                onChange={handleChange}
                                className="textbox"
                            />
                            <p>{inputsInfo[index]}</p>
                        </li>
                    ))}
                <button type="button" className="button" onClick={onSubmit}>
                    Take that Pic! 🎞
                </button>
            </form>
        </div>
    );
};

export default APIForm;
