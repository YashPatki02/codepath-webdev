// main.jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./routes/Layout";
import DetailView from "./routes/DetailView";
import NotFound from "./routes/NotFound";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index={true} element={<App />} />
                <Route path="/coinDetails/:symbol" element={<DetailView />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
