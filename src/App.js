import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather />
                <footer>
                    This project was coded by{" "}
                    <a
                        href="https://www.linkedin.com/in/sasha-baxendale/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Sasha Baxendale
                    </a>{" "}
                    and is open-sourced{" "}
                    <a
                        href="https://github.com/SashaBaxy/react-weather-app-complete"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open-sourced on GitHub
                    </a>
                </footer>
            </div>
        </div>
    );
}
