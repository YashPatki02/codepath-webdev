import React, { useState } from "react";
import APIForm from "./components/APIForm";
import Gallery from "./components/Gallery";

const App = () => {
    const [inputs, setInputs] = useState({
        url: "",
        format: "",
        no_ads: "",
        no_cookie_banners: "",
        width: "",
        height: "",
    });

    const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

    const [currentImage, setCurrentImage] = useState("");
    const [prevImages, setPrevImages] = useState([]);
    const [quota, setQuota] = useState({ limit: 10, remaining: 0 });

    const submitForm = () => {
        if (!inputs.url) {
            alert("Please provide a URL");
            return;
        }

        const defaultValues = {
            format: "jpeg",
            no_ads: "true",
            no_cookie_banners: "true",
            width: "1920",
            height: "1080",
        };

        Object.entries(inputs).forEach(([key, value]) => {
            if (value === "") inputs[key] = defaultValues[key];
        });

        makeQuery();
    };

    const makeQuery = () => {
        const wait_until = "network_idle";
        const response_type = "json";
        const fail_on_status = "400%2C404%2C500-511";
        const url_starter = "https://";
        const fullURL = url_starter + inputs.url;

        const query = `https://api.apiflash.com/v1/urltoimage?access_key=${
            ACCESS_KEY
        }&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${
            inputs.height
        }&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${
            inputs.no_ads
        }&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;

        callAPI(query);
    };

    const callAPI = async (query) => {
        try {
            const response = await fetch(query);
            const json = await response.json();

            if (!json.url) {
                alert("Error fetching screenshot. Please check inputs.");
                return;
            }

            setCurrentImage(json.url);
            setPrevImages((images) => [...images, json.url]);
            reset();
            getQuota();
        } catch (error) {
            console.error(error);
        }
    };

    const getQuota = async () => {
        // const quotaQuery = `https://api.apiflash.com/v1/quota?access_key=${
        //     ACCESS_KEY
        // }`;
        // try {
        //     const response = await fetch(quotaQuery);
        //     const json = await response.json();
        //     setQuota({
        //         ...quota
        //         limit: quota.limit + 1,
        //     });
        // } catch (error) {
        //     console.error("Error fetching quota", error);
        // }
        setQuota({
            limit: 10,
            remaining: quota.remaining + 1,
        });
    };

    const reset = () => {
        setInputs({
            url: "",
            format: "",
            no_ads: "",
            no_cookie_banners: "",
            width: "",
            height: "",
        });
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
        }));
    };

    return (
        <div className="whole-page">
            <h1>Build Your Own Screenshot! 📸</h1>
            <div className="quota">
                <p>
                    Quota: {quota.remaining}/{quota.limit} calls left
                </p>
            </div>
            <APIForm
                inputs={inputs}
                handleChange={handleChange}
                onSubmit={submitForm}
            />
            <br />

            {currentImage && (
                <div className="container">
                    <h3>Current Screenshot:</h3>
                    <img
                        className="screenshot"
                        src={currentImage}
                        alt="Screenshot returned"
                    />
                </div>
            )}

            <div className="container">
                <h3>Current Query Status:</h3>
                <p>
                    https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
                    <br />
                    &url={inputs.url}
                    <br />
                    &format={inputs.format}
                    <br />
                    &width={inputs.width}
                    <br />
                    &height={inputs.height}
                    <br />
                    &no_cookie_banners={inputs.no_cookie_banners}
                    <br />
                    &no_ads={inputs.no_ads}
                </p>
            </div>

            <Gallery images={prevImages} />
        </div>
    );
};

export default App;
