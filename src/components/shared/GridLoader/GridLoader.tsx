import React from "react";
import cs from "classnames";
import Container from "../../Container/Container";

import "./GridLoader.scss";
interface Props {
  className?: string;
  length: number;
  component: JSX.Element;
}
const GridLoader = (props: Props) => {
  return (
    <div className={cs("GridLoader", props.className)}>
      {Array.from({ length: props.length }).map((item, index) => {
        return props.component;
      })}
    </div>
  );
};

export default GridLoader;
