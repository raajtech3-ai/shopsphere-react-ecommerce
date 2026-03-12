import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={logo} alt="logo" width="40" className="me-2" />
        ShopSphere
      </a>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Mega Category */}
        <ul className="navbar-nav me-3">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categories
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item">Electronics</a>
              </li>

              <li>
                <a className="dropdown-item">Fashion</a>
              </li>

              <li>
                <a className="dropdown-item">Home</a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Search */}
        <form className="d-flex mx-auto w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
          />

          <button className="btn btn-warning">Search</button>
        </form>

        {/* Right menu */}
        <ul className="navbar-nav">
          {/* User Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Account
            </a>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item">Login</a>
              </li>

              <li>
                <a className="dropdown-item">Orders</a>
              </li>

              <li>
                <a className="dropdown-item">Profile</a>
              </li>
            </ul>
          </li>

          {/* Cart */}
          <li className="nav-item ms-3">
            <a className="nav-link position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </a>
          </li>

          {/* Dark Mode */}
          <li className="nav-item ms-3">
            <button className="btn btn-outline-light">🌙</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
