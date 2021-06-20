import React, { useMemo } from "react";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { Country, getCountries } from "../../api/Country";
import CountryCard from "../../components/CountryCard/CountryCard";
import "./Home.scss";
import Container from "../../components/Container/Container";

const Home = () => {
  const params = useMemo(() => ({ pLimit: 10, pPage: 1 }), []);
  const { data, loading, error } = useApiCall(getCountries, [params]);
  const countries = data?.Response ?? ([] as Country[]);
  console.log(data, "data", countries, "countries");
  return (
    <Container>
      <div className="Home">
        <div className="Home__top"></div>
        <div className="Home__cards">
          {countries.map((country) => (
            <CountryCard key={country.NumericCode} country={country} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
