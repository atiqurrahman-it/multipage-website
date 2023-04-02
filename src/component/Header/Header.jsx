import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav";
const Header = () => {
  const [click, setClick] = useState(true);
  return (
    // react router provide NavLink tag
    <header className="header">
      {/* logo te click korte hompage e jabe  */}
      <NavLink to="/">
        <a>MultiPage </a>
        <div onClick={() => setClick(!click)} className="ShowMenu">
          {click ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </NavLink>
      {click ? <Nav /> : ""}
    </header>
  );
};

export default Header;
<h1>Header</h1>;
