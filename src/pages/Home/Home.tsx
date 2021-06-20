import React, { useMemo, useState } from "react";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { Country, getCountries } from "../../api/Country";
import Container from "../../components/Container/Container";
import CountryCard from "../../components/CountryCard/CountryCard";
import SearchInput from "../../components/shared/SearchInput/SearchInput";
import { ReactComponent as AscIcon } from "../../assets/icons/sort-asc.svg";
import { ReactComponent as DescIcon } from "../../assets/icons/sort-desc.svg";
import { HandleLoadingState } from "../../components/shared/HandleLoadingState/HandleLoadingState";
import GridLoader from "../../components/shared/GridLoader/GridLoader";
import Message from "../../components/shared/Message/Message";
import Button from "../../components/shared/Button/Button";

import cs from "classnames";
import "./Home.scss";
import CountryCardLoader from "../../components/CountryCard/CountryCardLoader/CountryCardLoader";
import useCountries from "../../lib/hooks/useCountries";
import { checkPageNumber } from "../../lib/helpers/checkPageNumber";

const Home = () => {
  const [isAscSortActive, setIsAscSortActive] = useState(false);
  const [isDescSortActive, setIsDescSortActive] = useState(false);

  const { countries, loading, error, setPage, page } = useCountries();

  console.log(countries, "countries");
  return (
    <Container>
      <div className="Home">
        <div className="Home__top">
          <SearchInput />
          <div className="Home__sort_icons">
            <AscIcon
              className={cs(
                "Home__sort",
                "Home__asc",
                isAscSortActive && "Home__asc--active"
              )}
              onClick={() => setIsAscSortActive(true)}
            />
            <DescIcon className="Home__sort" />
          </div>
        </div>
        <div className="Home__content">
          <HandleLoadingState
            loading={checkPageNumber(page, loading)}
            component={
              <GridLoader length={10} component={<CountryCardLoader />} />
            }
          >
            {countries.length === 0 ? (
              <Message text="No data" type="info" />
            ) : (
              <div className="Home__cards">
                {countries.map((country) => {
                  return (
                    <CountryCard key={country.CurrencyCode} country={country} />
                  );
                })}
              </div>
            )}
          </HandleLoadingState>

          <Button
            label={!loading ? "Load More" : "Loading..."}
            buttonClassName={cs("load_btn")}
            onClick={() => setPage((prevState) => prevState + 1)}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
