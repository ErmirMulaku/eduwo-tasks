const objectToQueryString = (params: {
  [key: string]: number | string | undefined;
}) => {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
};

export default objectToQueryString;
