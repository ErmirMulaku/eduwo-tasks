import React from "react";
import { Country } from "../../api/Country";
import { ReactComponent as CountryCardArrow } from "../../assets/icons/right-arrow.svg";
import "./CountryCard.scss";
interface Props {
  country: Country;
}
const CountryCard = (props: Props) => {
  const country = props.country;
  return (
    <div className="CountryCard">
      <img
        width={200}
        height={120}
        src={country.FlagPng}
        alt="Country Flag"
        className="CountryCard__img"
      />

      <div className="CountryCard__fade_away">
        <div className="CountryCard__name">{country.Name}</div>
        <CountryCardArrow className="CountryCard__arrow" />
      </div>
    </div>
  );
};

export default CountryCard;
