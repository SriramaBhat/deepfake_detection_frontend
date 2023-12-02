import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <p>Protein Structure Predictor</p>
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <div>
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
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
              <Link className="nav-link" to="/login">
                Login
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