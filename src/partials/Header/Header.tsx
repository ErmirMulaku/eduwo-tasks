import React from "react";
import { ReactComponent as HeaderLogo } from "../../assets/icons/HeaderLogo.svg";

import "./Header.scss";
const Header = () => {
  return (
    <div className="Header">
      <HeaderLogo />
    </div>
  );
};

export default Header;
