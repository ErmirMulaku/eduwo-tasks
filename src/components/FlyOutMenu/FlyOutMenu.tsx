import React from "react";
import Photo from "../../assets/images/my_photo.jpg";
import cs from "classnames";
import "./FlyOutMenu.scss";
interface Props {
  isOpen: boolean;
}
const FlyOutMenu = (props: Props) => {
  return (
    <div className={cs("FlyOutMenu", props.isOpen && "FlyOutMenu--open")}>
      <div className="FlyOutMenu__icon"></div>
      <div className="FlyOutMenu__content">
        <img
          src={Photo}
          alt="my photo"
          width={140}
          height={90}
          className="FlyOutMenu__image"
        />
        <div className="FlyOutMenu__name">Ermir Mulaku</div>
        <div className="FlyOutMenu__description">
          I'm proud to do the Eduwo Task
        </div>
      </div>
    </div>
  );
};

export default FlyOutMenu;
