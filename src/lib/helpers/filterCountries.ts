import { Country } from "../../api/Country";

export const filterCountries = (
  countries: Country[],
  filterName: string,
  search: string
) => {
  const filters: { [key: string]: () => Country[] } = {
    "sortA-ZAndFilterBySearch": () => {
      return countries
        .sort((a, b) => (a.Name > b.Name ? 1 : -1))
        .filter((country: { Name: string }) => {
          return country.Name.toLowerCase().includes(search.toLowerCase());
        });
    },
    "sortZ-AAndFilterBySearch": () => {
      return countries
        .sort((a, b) => (a.Name > b.Name ? -1 : 1))
        .filter((country) => {
          return country.Name.toLowerCase().includes(search.toLowerCase());
        });
    },
  };
  return filters[filterName]();
};
