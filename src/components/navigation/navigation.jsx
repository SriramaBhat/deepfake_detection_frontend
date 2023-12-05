import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";

import "./navigation.styles.scss";
import veritasiumLogo from "../../assets/logo.png";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={veritasiumLogo} className="logo" alt="Veritasium-Logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <div>
              <HashLink className="nav-link log_in" to="/#about-us">About us</HashLink>
              <HashLink className="nav-link log_in" to="/#methadology">Our Methadology</HashLink>
              <span className="nav-link sign_up" onClick={signOutUser}>
                {""}Sign Out{""}
              </span>
            </div>
          ) : (
            <div>
              {" "}
              <HashLink className="nav-link log_in" to="/#about-us">About us</HashLink>
              <HashLink className="nav-link log_in" to="/#methadology">Our Methadology</HashLink>
              <Link className="nav-link log_in" to="/login">
                Log In
              </Link>
              <Link className="nav-link sign_up" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
