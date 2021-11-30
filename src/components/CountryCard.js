import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";
const CountryCard = ({
  name,
  capital,
  flags,
  languages,
  population,
  currencies,
}) => {
  return (
    <Link to={capital}>
      <div className="countrymain">
        <div className="country" key={name}>
          <span>
            <h2 className="back">
              <b>{name}</b>
            </h2>
            <p className="back">
              <b>{capital}</b>
            </p>
          </span>
          <img src={flags.png} alt={name} />
          <p>
            Language (s):
            {languages.map((lang, i) => (
              <span key={i}> {lang.name} </span>
            ))}
          </p>
          <p>
            Population:{" "}
            <span className="low">{number.formatNumber(population)}</span>
          </p>
          <p>
            Currencies:
            {currencies.map((mon, i) => (
              <span key={i}>
                {mon.name} - {mon.symbol}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
