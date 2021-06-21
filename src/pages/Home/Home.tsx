import React from "react";
import ReactPaginate from "react-paginate";
import { useCountries } from "../../lib/hooks/useCountries";
import Container from "../../components/Container/Container";
import CountryCard from "../../components/CountryCard/CountryCard";
import SearchInput from "../../components/shared/SearchInput/SearchInput";
import { HandleLoadingState } from "../../components/shared/HandleLoadingState/HandleLoadingState";
import GridLoader from "../../components/shared/GridLoader/GridLoader";
import Message from "../../components/shared/Message/Message";

import { ReactComponent as AscIcon } from "../../assets/icons/sort-asc.svg";

import { ReactComponent as DescIcon } from "../../assets/icons/sort-desc.svg";

import cs from "classnames";
import "./Home.scss";

const Home = () => {
  const {
    paginatedCountries,
    setOffset,
    filter,
    setFilter,
    loading,
    setSearch,
    error,
    setInitialPage,
    initialPage,
    pageCount,
  } = useCountries();

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected;
    let offset;
    if (selectedPage == 0) {
      offset = 0;
      setOffset(offset);
      return;
    }
    offset = selectedPage * 10;

    setOffset(offset);
  };

  return (
    <Container>
      <div className="Home">
        <div className="Home__top">
          <div className="Home__sort_icons">
            <AscIcon
              className={cs(
                "Home__sort",
                "Home__asc",
                filter === "asc" && "Home__sort--active"
              )}
              onClick={() => setFilter("asc")}
            />
            <DescIcon
              className={cs(
                "Home__sort",
                filter === "desc" && "Home__sort--active"
              )}
              onClick={() => setFilter("desc")}
            />
          </div>
          <SearchInput
            filterCountriesBySearch={(search) => {
              setSearch(search);
              setInitialPage(0);
            }}
          />
        </div>
        <div className="Home__content">
          <HandleLoadingState
            loading={loading}
            component={<GridLoader length={10} />}
          >
            {paginatedCountries.length === 0 ? (
              <Message text="No data" type="info" />
            ) : (
              <div className="Home__cards">
                {paginatedCountries.map((country, index) => {
                  return <CountryCard key={index} country={country} />;
                })}
              </div>
            )}
          </HandleLoadingState>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            initialPage={initialPage}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            breakClassName={"break-me"}
            onPageChange={(e) => handlePageClick(e)}
            containerClassName={"pagination"}
            pageClassName=""
            activeClassName={"active"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
