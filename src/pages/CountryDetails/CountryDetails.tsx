import React, { useMemo } from "react";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { getCountries } from "../../api/Country";
import { RouteComponentProps } from "react-router";
import "./CountryDetails.scss";
interface Props {
  name: string;
}
const CountryDetails = (props: RouteComponentProps<Props>) => {
  const name = props.match.params.name;
  const params = useMemo(() => ({ pName: name }), [name]);
  const { data, loading, error } = useApiCall(getCountries, [params]);
  const country = data?.Response ?? [];
  const ourCountry = country && country[0];

  console.log(ourCountry, "country");
  console.log(params, "params");
  return (
    <div className="CountryDetails">
      <div className="CountryDetails__top"></div>
    </div>
  );
};

export default CountryDetails;
