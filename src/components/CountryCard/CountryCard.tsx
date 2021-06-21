import React from "react";
import { Country } from "../../api/Country";
import { ReactComponent as CountryCardArrow } from "../../assets/icons/right-arrow.svg";
import "./CountryCard.scss";
import { useRouter } from "../../lib/hooks/useRouter";
interface Props {
  country: Country;
}
const CountryCard = (props: Props) => {
  const router = useRouter();
  console.log(router, "router");
  const country = props.country;
  return (
    <div
      className="CountryCard"
      onClick={() => router.history.push(`details/${country.Name}`)}
    >
      <img
        width={200}
        height={120}
        src={country.FlagPng}
        alt="Country Flag"
        className="CountryCard__img"
      />

      <div className="CountryCard__fade_away">
        <div className="CountryCard__data">
          <div className="CountryCard__name">{country.Name}</div>
          <div className="CountryCard__region">Region: {country.Region}</div>
          <div className="CountryCard__sub_region">
            SubRegion: {country.SubRegion}
          </div>
        </div>

        <CountryCardArrow className="CountryCard__arrow" />
      </div>
    </div>
  );
};

export default CountryCard;
