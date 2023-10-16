import React from "react";

import translation from "../images/translation.svg";
import translationNotActive from "../images/translationNotActive.svg";
import * as Icon from "react-bootstrap-icons";
import { redirect } from "react-router-dom";

const NavBar = ({ translate, setTranslate, setCloseModalShow }) => {
  return (
    <div className="container-fluid box-shadow position-fixed top-0 bg-white z-1">
      <div className="d-flex justify-content-between p-3">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            translate === 0 ? setTranslate(1) : setTranslate(0);
          }}
        >
          {translate === 0 ? (
            <img src={translation} alt="translation" />
          ) : (
            <img src={translationNotActive} alt="translation" />
          )}
        </a>
        <h3>I speak Arabic</h3>
        <a
          onClick={() => {
            setCloseModalShow(true);
          }}
          className="d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm"
          style={{
            cursor: "pointer",
            width: 40,
            height: 40,
          }}
        >
          <Icon.XLg color="rgba(142, 127, 145, 1)" size={24} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
