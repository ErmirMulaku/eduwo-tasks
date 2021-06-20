import React from "react";
import { ReactComponent as InfoIcon } from "../../../assets/icons/info-icon.svg";
import "./Message.scss";

import cs from "classnames";
interface Props {
  text: string;

  type?: string;
}
const Message = (props: Props) => {
  return (
    <div className={cs("Message", `Message--${props.type}`)}>
      <InfoIcon className="Message__icon" />
      {props.text}
    </div>
  );
};

export default Message;
