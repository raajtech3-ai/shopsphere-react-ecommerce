import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Location from "./Location";
import CategoryMenu from "./CategoryMenu";
import CartIcon from "./CartIcon";
import LoginMenu from "./LoginMenu";
import MobileMenu from "./MobileMenu";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <SearchBar />
      <Location />
      <CategoryMenu />
      <CartIcon />
      <LoginMenu />
    </header>
  );
};

export default Navbar;
