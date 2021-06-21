import React from "react";
import ContentLoader from "react-content-loader";
import "./CountryCardLoader.scss";

const CountryCardLoader = () => {
  return (
    <ContentLoader
      width={236}
      height={236}
      viewBox="0 0 236 236"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      className="CountryCardLoader"
    >
      <rect x={0} y={0} width={236} height={123} />
      <rect x={10} y={128} width={125} height={17} />

      <rect x={10} y={160} width={100} height={12} />
      <rect x={10} y={185} width={100} height={12} />
    </ContentLoader>
  );
};

export default CountryCardLoader;
