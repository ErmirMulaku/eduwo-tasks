import React, { useMemo } from "react";
import "./Home.scss";
import { useApiCall } from "../../lib/hooks/useApiCall";
import { City, getCities } from "../../api/City";

const Home = () => {
  const params = useMemo(() => ({ limit: 10, offset: 0 }), []);
  const { data, loading, error } = useApiCall(getCities, [params]);
  const cities = data?.data as unknown as City[];
  console.log(data, "data", cities, "cities");
  return <div className="Home"></div>;
};

export default Home;
