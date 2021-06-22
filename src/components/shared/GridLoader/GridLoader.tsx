import React from "react";
import cs from "classnames";

import "./GridLoader.scss";
import CountryCardLoader from "../../CountryCard/CountryCardLoader/CountryCardLoader";
interface Props {
  className?: string;
  length: number;
  component?: JSX.Element;
}
const GridLoader = (props: Props) => {
  return (
    <div className={cs("GridLoader", props.className)}>
      {Array.from({ length: props.length }).map((item, index) => {
        return <CountryCardLoader key={index} />;
      })}
    </div>
  );
};

export default GridLoader;
