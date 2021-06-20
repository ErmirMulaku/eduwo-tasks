import React, { useEffect, useState } from "react";
import { useApiCall } from "./useApiCall";
import { Country, getCountries } from "../../api/Country";

const useUserReview = () => {
  const [page, setPage] = useState(1);
  const [countries, setCountries] = useState([] as Country[]);

  const params = React.useMemo(
    () => ({
      pLimit: 10,
      pPage: page,
    }),
    [page]
  );
  const { loading, error, data } = useApiCall(getCountries, [params]);

  useEffect(() => {
    const nextData = data?.Response || [];
    setCountries((prevState) => [...prevState, ...nextData]);
  }, [data]);

  return {
    setPage,
    error,
    loading,
    page,
    countries,
  };
};

export default useUserReview;
