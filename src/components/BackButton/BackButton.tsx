import React from "react";
import { Button } from "reactstrap";
import { ReactComponent as BackIcon } from "../../assets/icons/BackIcon.svg";
import "./BackButton.scss";
import { useRouter } from "../../lib/hooks/useRouter";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button className="BackButton" onClick={() => router.history.goBack()}>
      <BackIcon className="BackButton__icon" width={24} height={24} />
      <span className="BackButton__text">Back Home</span>
    </Button>
  );
};

export default BackButton;
