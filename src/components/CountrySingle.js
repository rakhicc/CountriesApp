import React, { Component } from "react";

class CountrySingle extends Component {
  render() {
    return (
      <div className="single">
        <p>{this.props.params.name}</p>
      </div>
    );
  }
}

export default CountrySingle;
