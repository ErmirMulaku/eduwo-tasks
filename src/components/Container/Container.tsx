import React from "react";
import cs from "classnames";
import "./Container.scss";
interface ContainerProps {
  children: React.ReactNode;
}
const Container = (props: ContainerProps) => {
  return <div className={cs("Container")}>{props.children}</div>;
};

export default Container;
