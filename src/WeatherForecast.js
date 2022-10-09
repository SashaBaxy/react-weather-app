import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "b38034b76f133ca05fd67538c5b8c748";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">
                            19°
                        </span>{" "}
                        <span className="WeatherForecast-temperature-min">
                            10°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
