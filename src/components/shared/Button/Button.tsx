import React from "react";
import { Button as ButtonRS } from "reactstrap";

//styles
import cs from "classnames";
import "./Button.scss";

interface Props {
  label: string;
  buttonClassName?: string;
  textClassName?: string;

  onClick?: (e: React.MouseEvent) => void | JSX.Element;

  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <ButtonRS
      disabled={props.disabled}
      onClick={props.onClick}
      className={cs(
        "Btn",
        "Button",
        props.buttonClassName && props.buttonClassName
      )}
    >
      <span className={cs("Button__text", props.textClassName)}>
        {props.label}
      </span>
    </ButtonRS>
  );
};

export default Button;
