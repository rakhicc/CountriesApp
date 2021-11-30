import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";
const getCountry = (capital) => {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
};

const getWeather = (capital) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
};

class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
    isLoading: true,
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
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      console.log("country", this.state.country);
      console.log("weather", this.state.weather);
    });
  }
  render() {
    if (this.state.isLoading) {
      return <div className="lds-dual-ring"></div>;
    }
    if (!this.state.isLoading) {
      return (
        <div className="single">
          <p>
            Right now it is {this.state.weather.main.temp} degrees in{" "}
            {this.state.country.capital}
            <span>
              <img
                src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
                alt="weathericon"
              />
            </span>
          </p>
          <p>
            Wind Speed is {this.state.weather.wind.speed} in{" "}
            {this.state.country.capital}
          </p>
          <p>
            Population is {number.formatNumber(this.state.country.population)}{" "}
          </p>
          <p>
            Languages used are :{" "}
            {this.state.country.languages.map((lang) => (
              <li>{lang.name}</li>
            ))}
          </p>
        </div>
      );
    }
  }
}

export default CountrySingle;
