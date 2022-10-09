import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">Thu</div>
                        <WeatherIcon code="01d" size={36} />
                        <div className="WeatherForecast-temperature">
                            <span className="WeatherForecast-temperature-max">
                                {forecast[0].temp.max}°
                            </span>{" "}
                            <span className="WeatherForecast-temperature-min">
                                {forecast[0].temp.min}°
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        Axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
