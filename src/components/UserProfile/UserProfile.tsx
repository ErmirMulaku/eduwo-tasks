import React, { useRef, useState } from "react";
import { useOutsideClickDetection } from "../../lib/hooks/useOutsideClickDetection";
import FlyOutMenu from "../FlyOutMenu/FlyOutMenu";
import "./UserProfile.scss";

const UserProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const openMenu = () => {
    setIsMenuOpen((prevState) => true);
  };
  const closeMenu = () => {
    setIsMenuOpen((prevState) => false);
  };
  useOutsideClickDetection(ref, closeMenu);
  return (
    <div ref={ref} className="UserProfile">
      <div
        onMouseEnter={openMenu}
        onClick={openMenu}
        className="UserProfile__text"
      >
        My Profile
      </div>
      <FlyOutMenu isOpen={isMenuOpen} />
    </div>
  );
};

export default UserProfile;
