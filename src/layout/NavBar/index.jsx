import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useUsername } from "../../contexts";
import "./style.css";

const NavBar = () => {
  const { username } = useUsername()

  const activeStyle = {
    textDecoration: "underline",
    color: "darkblue",
  };

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined);

  return (
    <>
      <nav>
        <h2>{username ? `${username}\'s Music` : 'Music'}</h2>
        <ul className="nav-links">
          <li>
            <NavLink style={navA} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navA} to="/albums">
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
