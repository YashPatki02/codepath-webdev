// main.jsx
import React from "react";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./routes/Layout";
import DetailView from "./routes/DetailView";
import NotFound from "./routes/NotFound";
import "./index.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index={true} element={<App />} />
                    <Route
                        path="/coinDetails/:symbol"
                        element={<DetailView />}
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
