import { useCallback, useEffect, useState } from "react";
import { Country, getCountries } from "../../api/Country";
import { useApiCall } from "./useApiCall";
import { useErrorHandler } from "./useErrorHandler";

import { filterCountries } from "../helpers/filterCountries";

export const useCountries = () => {
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
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
    let newCountries;
    let offset1;
    if (!filter && search) {
      newCountries = countries.filter((country) => {
        return country.Name.toLowerCase().includes(search.toLowerCase());
      });
      setOffset(0);
      setSelectedPage(0);

      setPaginatedCountriesAndPageCount(newCountries);
      return;
    }
    if (filter && !search) {
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
      if (filter === "asc") {
        newCountries = filterCountries(
          countries,
          "sortA-ZAndFilterBySearch",
          search
        );
        setOffset(0);
        setPaginatedCountriesAndPageCount(newCountries);

        return;
      }
      newCountries = filterCountries(
        countries,
        "sortZ-AAndFilterBySearch",
        search
      );
      setOffset(0);
      setPaginatedCountriesAndPageCount(newCountries);

      return;
    }

    setPaginatedCountriesAndPageCount(countries);

    /*    return () => {
      setPaginatedCountries([]);
    };*/
  }, [offset, search, pageCount, countries, filter]);

  useEffect(() => {
    setError(errorHandler.error);
    return () => setError(undefined);
  }, [errorHandler.error]);

  console.log(selectedPage, "selectedPage");
  console.log(offset, "offset");
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
    selectedPage,
    setSelectedPage,
  };
};
