import React from "react";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
  component: JSX.Element;
}

export const HandleLoadingState = (props: Props) => {
  if (!props.loading) {
    return <>{props.children}</>;
  }
  return props.component;
};
