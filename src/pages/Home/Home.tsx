import React from "react";
import ReactPaginate from "react-paginate";
import { useWindowWidth } from "../../lib/hooks/useWindowWidth";
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
import { HandleErrorState } from "../../components/ErrorHandlerState/ErrorHandlerState";

const Home = () => {
  const width = useWindowWidth();
  const {
    setOffset,
    setFilter,
    setSearch,
    paginatedCountries,
    filter,
    loading,
    search,
    error,
    selectedPage,
    setSelectedPage,
    pageCount,
  } = useCountries();

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected;
    let offset;
    if (selectedPage === 0) {
      offset = 0;
      setOffset(offset);
      return;
    }

    offset = selectedPage * 10;
    setSelectedPage(selectedPage);
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
              onClick={() => {
                setFilter("desc");
              }}
            />
          </div>
          <SearchInput
            filterCountriesBySearch={(search) => {
              setSearch(search);
            }}
          />
        </div>
        <div className="Home__content">
          <HandleLoadingState
            loading={loading}
            component={<GridLoader length={10} />}
          >
            <HandleErrorState error={error}>
              {paginatedCountries.length === 0 ? (
                <Message text="No data" type="info" />
              ) : (
                <div className="Home__cards">
                  {paginatedCountries.map((country, index) => {
                    return <CountryCard key={index} country={country} />;
                  })}
                </div>
              )}
            </HandleErrorState>
          </HandleLoadingState>

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakLinkClassName={""}
            pageCount={pageCount}
            initialPage={selectedPage}
            pageRangeDisplayed={width < 768 ? 1 : 5}
            marginPagesDisplayed={width < 768 ? 1 : 2}
            breakClassName={"break-me"}
            onPageChange={(e) => handlePageClick(e)}
            containerClassName={cs("pagination", error && "pagination--hidden")}
            pageClassName=""
            activeClassName={"active"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
