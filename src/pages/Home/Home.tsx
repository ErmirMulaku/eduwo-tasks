import React, { useMemo } from "react";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { Country, getCountries } from "../../api/Country";
import Container from "../../components/Container/Container";
import CountryCard from "../../components/CountryCard/CountryCard";
import SearchInput from "../../components/shared/SearchInput/SearchInput";
import { ReactComponent as AscIcon } from "../../assets/icons/sort-asc.svg";
import { ReactComponent as DescIcon } from "../../assets/icons/sort-desc.svg";

import "./Home.scss";
import cs from "classnames";

const Home = () => {
  const params = useMemo(() => ({ pLimit: 10, pPage: 1 }), []);
  const { data, loading, error } = useApiCall(getCountries, [params]);
  const countries = data?.Response ?? ([] as Country[]);
  console.log(data, "data", countries, "countries");
  return (
    <Container>
      <div className="Home">
        <div className="Home__top">
          <SearchInput />
          <div className="Home__sort_icons">
            <AscIcon
              className={cs("Home__sort", "Home__asc")}
              onMouseEnter={() => console.log("saasas")}
            />
            <DescIcon className="Home__sort" />
          </div>
        </div>
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
