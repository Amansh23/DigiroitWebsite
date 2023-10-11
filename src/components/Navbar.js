import React from "react";
import { NAVBAR_ITEMS } from "./../data/static";
import { NavLink } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-lg px-5 py-3 border-bottom">
      <div className="container-fluid">
        <img
          src="/logo_digiroit.png"
          alt="Logo"
          // width={30}
          height={42}
          className="d-inline-block align-text-center"
        />
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex flex-row-reverse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex">
            {NAVBAR_ITEMS.map((et) => (
              <NavLink className="nav-link" key={et.redirectTo} aria-current="page" to={et.redirectTo}>
                {et.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
