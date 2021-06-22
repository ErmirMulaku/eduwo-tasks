import React, { useMemo } from "react";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { getCountries } from "../../api/Country";
import { RouteComponentProps } from "react-router";
import "./CountryDetails.scss";
import BackButton from "../../components/BackButton/BackButton";
import { HandleLoadingState } from "../../components/shared/HandleLoadingState/HandleLoadingState";
import CountryDetailsLoader from "./CountryDetailsLoader/CountryDetailsLoader";
interface Props {
  name: string;
}
const CountryDetails = (props: RouteComponentProps<Props>) => {
  const name = props.match.params.name;
  const params = useMemo(() => ({ pName: name }), [name]);
  const { data, loading, error } = useApiCall(getCountries, [params]);
  const country = data?.Response ?? [];
  const ourCountry = country[0] ?? {};

  console.log(ourCountry, "country");
  console.log(params, "params");
  return (
    <div className="CountryDetails">
      <div className="CountryDetails__top">
        <BackButton />
      </div>
      <div className="CountryDetails__content">
        <HandleLoadingState loading={true} component={<CountryDetailsLoader />}>
          <img
            width={600}
            height={400}
            src={ourCountry.FlagPng}
            className={"CountryDetails__image"}
          />
          <div className="CountryDetails__details">
            <div>
              <h1 className="CountryDetails__name">{ourCountry?.Name}</h1>
              <h5>
                <span>NativeName :</span> {ourCountry.NativeName}
              </h5>
              <h5>
                <span>Area :</span> {ourCountry.Area}
              </h5>
              <h5>
                <span>Region :</span> {ourCountry.Region}
              </h5>
              <h5>
                <span>SubRegion :</span> {ourCountry.SubRegion}
              </h5>
            </div>
            <div className="CountryDetails__details--right">
              <h5>
                <span>Top Level Domain :</span> {ourCountry.Alpha2Code}
              </h5>
              <h5>
                <span>Currency :</span> {ourCountry.CurrencyName}
              </h5>
              <h5>
                <span>NativeLanguage :</span> {ourCountry.NativeLanguage}
              </h5>
            </div>
          </div>
        </HandleLoadingState>
      </div>
    </div>
  );
};

export default CountryDetails;
