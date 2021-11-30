import React, { Component } from "react";
import axios from "axios";
function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };
  componentDidMount() {
    // we can use console log in this way in a class component
    console.log("wow");
    console.log(this.props.params.name);
  }
  render() {
    return (
      <div className="single">
        <p>{this.props.params.name}</p>
      </div>
    );
  }
}

export default CountrySingle;
