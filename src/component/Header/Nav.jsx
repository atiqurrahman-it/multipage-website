import React from "react";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  console.log(props.open)
  return (
    <nav>
      <ul className={ `${props.open ? 'ulTop': 'ultop'}`} >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
