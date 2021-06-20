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
      <rect x={27} y={22} width={112} height={18} />
      <rect x={27} y={98} width={85} height={55} />
      <rect x={27} y={161} width={57} height={12} />
      <rect x={27} y={211} width={64} height={12} />
    </ContentLoader>
  );
};

export default CountryCardLoader;
