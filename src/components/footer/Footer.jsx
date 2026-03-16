import React from "react";
import FooterTop from "./FooterTop";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop></FooterTop>
      <FooterMain></FooterMain>
      <FooterBottom></FooterBottom>
    </footer>
  );
};

export default Footer;
