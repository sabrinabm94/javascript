import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReportHandler from './components/utils/ReportHandler';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals(ReportHandler);
