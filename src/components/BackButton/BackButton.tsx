import React from "react";
import { Button } from "reactstrap";
import { ReactComponent as BackIcon } from "../../assets/icons/BackIcon.svg";
import { useRouter } from "../../lib/hooks/useRouter";
import "./BackButton.scss";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button className="BackButton" onClick={() => router.history.goBack()}>
      <BackIcon className="BackButton__icon" width={18} height={18} />
      <span className="BackButton__text">Back Home</span>
    </Button>
  );
};

export default BackButton;
