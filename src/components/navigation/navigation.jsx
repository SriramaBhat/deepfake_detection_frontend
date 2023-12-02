import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

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
              <Link className="nav-link log_in">About us</Link>
              <Link className="nav-link log_in">Our Methadology</Link>
              <Link className="nav-link" to="/dna-to-aa">
                DNA to Amino Acid
              </Link>
              <Link className="nav-link" to="/aa-struct-pred">
                Protein Structure Predictor
              </Link>
              <span className="nav-link" onClick={signOutUser}>
                {""}Sign Out{""}
              </span>
            </div>
          ) : (
            <div>
              {" "}
              <Link className="nav-link log_in">About us</Link>
              <Link className="nav-link log_in">Our Methadology</Link>
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
