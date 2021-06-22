import { useCallback, useEffect, useState } from "react";
import { Country, getCountries } from "../../api/Country";
import { useApiCall } from "./useApiCall";
import { useErrorHandler } from "./useErrorHandler";

import { filterCountries } from "../helpers/filterCountries";

export const useCountries = () => {
  const [offset, setOffset] = useState(0);
  const [initialPage, setInitialPage] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [perPage] = useState(10);
  const [countries, setCountries] = useState([] as Country[]);
  const [paginatedCountries, setPaginatedCountries] = useState([] as Country[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(undefined);
  const [pageCount, setPageCount] = useState(0);
  const errorHandler = useErrorHandler();
  const setPaginatedCountriesAndPageCount = (newCountries: Country[]) => {
    setPaginatedCountries(newCountries.slice(offset, offset + perPage));
    setPageCount(Math.ceil(newCountries.length / perPage));
  };
  const getData = async () => {
    try {
      const res = await getCountries({ pRegion: "Europe" });
      const countries = res?.Response ?? [];
      setCountries(countries);
    } catch (e) {
      errorHandler.handleError(e);
      console.log(errorHandler.error, "errorHandler.error");
      setError(errorHandler.error);

      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    return () => {
      setCountries([]);
    };
  }, []);
  useEffect(() => {
    if (!filter && search) {
      let newCountries = countries.filter((country) => {
        return country.Name.toLowerCase().includes(search.toLowerCase());
      });
      setPaginatedCountriesAndPageCount(newCountries);
      return;
    }
    if (filter && !search) {
      let newCountries;
      if (filter === "asc") {
        newCountries = countries.sort((a, b) => (a.Name > b.Name ? 1 : -1));
        setPaginatedCountriesAndPageCount(newCountries);
        return;
      }
      newCountries = countries.sort((a, b) => (a.Name > b.Name ? -1 : 1));
      setPaginatedCountriesAndPageCount(newCountries);

      return;
    }

    if (filter && search) {
      let newCountries;
      if (filter === "asc") {
        newCountries = filterCountries(
          countries,
          "sortA-ZAndFilterBySearch",
          search
        );
        setPaginatedCountriesAndPageCount(newCountries);

        return;
      }
      newCountries = filterCountries(
        countries,
        "sortZ-AAndFilterBySearch",
        search
      );
      setPaginatedCountriesAndPageCount(newCountries);

      return;
    }
    setPaginatedCountriesAndPageCount(countries);
    /*    setInitialPage(0);*/
    return () => {
      setPaginatedCountries([]);
      setPageCount(0);
    };
  }, [offset, search, countries, filter, setPageCount]);

  useEffect(() => {
    setError(errorHandler.error);
    return () => setError(undefined);
  }, [errorHandler.error]);
  console.log(search, "search");
  return {
    offset: offset,
    filter,
    setFilter,
    search,
    setSearch,
    paginatedCountries,
    setPaginatedCountries,
    countries,
    setOffset: setOffset,
    loading: loading,
    error,
    pageCount,
    perPage,
    setInitialPage,
    initialPage,
  };
};
