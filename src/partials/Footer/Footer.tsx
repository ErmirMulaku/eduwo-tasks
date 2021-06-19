import React from "react";
import "./Footer.scss";

const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return <footer className="Footer">Eduwo Task &copy;{currentYear}</footer>;
};

export default Footer;
