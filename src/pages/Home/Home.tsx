import React, { useMemo } from "react";
import "./Home.scss";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { Country, getCountries } from "../../api/Country";

const Home = () => {
  const params = useMemo(() => ({ pLimit: 5, pPage: 1 }), []);
  const { data, loading, error } = useApiCall(getCountries, [params]);
  const countries = data?.Response as unknown as Country[];
  console.log(data, "data", countries, "countries");
  return <div className="Home"></div>;
};

export default Home;
