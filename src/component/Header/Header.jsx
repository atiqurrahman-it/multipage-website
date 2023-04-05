import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    // react router provide NavLink tag
    <header className="header">
      {/* logo te click korte hompage e jabe  */}
      <NavLink to="/" className="Navlink">
        <div onClick={() => setClick(!click)} className="ShowMenu">
          {click === true ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <a>MultiTech </a>
      </NavLink>
      <Nav open={click} />
    </header>
  );
};

export default Header;
<h1>Header</h1>;
