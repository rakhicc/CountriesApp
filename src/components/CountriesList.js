import React, { Component } from "react";
//import "./App.css";

import axios from "axios";

import CountryCard from "./CountryCard";
class CountriesList extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,currencies,flags,languages,population"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }
  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    if (this.state.isLoading) {
      return <div className="lds-dual-ring"></div>;
    }
    if (!this.state.isLoading) {
      return (
        <div className="countries">
          <div className="searchInput">
            <input type="text" placeHolder="search" name="search" onChange={this.searchHandler} />
          </div>
          
          {this.state.data
            .filter((item) => {
              return item.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
            })
            .map((c) => (
              <CountryCard {...c} key={c.name} />
            ))}
           
        </div>
      );
    }
  }
}
export default CountriesList;
