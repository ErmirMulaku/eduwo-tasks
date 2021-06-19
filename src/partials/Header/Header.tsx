import React from "react";
import { ReactComponent as HeaderLogo } from "../../assets/icons/HeaderLogo.svg";
import UserProfile from "../../components/UserProfile/UserProfile";
import "./Header.scss";
const Header = () => {
  return (
    <div className="Header">
      <HeaderLogo />
      <UserProfile />
    </div>
  );
};

export default Header;
