import React from "react";
import ContentLoader from "react-content-loader";
import "./CountryDetailsLoader.scss";

const CountryDetailsLoader = () => {
  return (
    <ContentLoader
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      className="CountryDetailsLoader"
    >
      <rect x={0} y={0} width={600} height={400} />
      <rect x={700} y={40} width={220} height={40} />
      <rect x={700} y={100} width={105} height={15} />
      <rect x={815} y={100} width={105} height={15} />
      <rect x={700} y={125} width={105} height={15} />
      <rect x={815} y={125} width={105} height={15} />
      <rect x={700} y={150} width={105} height={15} />
      <rect x={815} y={150} width={105} height={15} />
      <rect x={700} y={175} width={105} height={15} />
      <rect x={815} y={175} width={105} height={15} />
      <rect x={940} y={40} width={105} height={15} />
      <rect x={1055} y={40} width={105} height={15} />
      <rect x={940} y={65} width={105} height={15} />
      <rect x={1055} y={65} width={105} height={15} />
      <rect x={940} y={90} width={105} height={15} />
      <rect x={1055} y={90} width={105} height={15} />
    </ContentLoader>
  );
};

export default CountryDetailsLoader;
