import React, { Component } from "react";
import axios from "axios";
const getCountry = (capital) => {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
};

const getWeather = (capital) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
};

class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
  };
  componentDidMount() {
    // we can use console log in this way in a class component
    console.log("wow");
    console.log(this.props.params.name);
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      console.log(res);
      this.setState({ country: res[0].data[0], weather: res[1].data });
      console.log("country", this.state.country);
      console.log("weather", this.state.weather);
    });
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
