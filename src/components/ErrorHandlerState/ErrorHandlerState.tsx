import React from "react";
import { UseErrorHandler } from "../../lib/hooks/useErrorHandler";
import "./HandleErrorState.scss";

interface Props {
  error?: string | UseErrorHandler;
  children: React.ReactNode;
}

export const HandleErrorState = (props: Props) => {
  if (!props.error) {
    return <>{props.children}</>;
  }

  return <div className="Error">{props.error.toString()}</div>;
};
