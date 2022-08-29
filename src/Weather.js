import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Look for a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Athens</h1>
      <ul>
        <li>Tuesday 18:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny icon"
          />
          26°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 76%</li>
            <li>Humidity: 87%</li>
            <li>Wind: 20km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}