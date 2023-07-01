import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useUsername } from "../../contexts";
import "./style.css";

const NavBar = () => {
  const [colourIndex, setColourIndex] = useState(0)
  const [count, setCount] = useState(0)
  const { username } = useUsername()
  const colours = ["#3D348B", "#E65F5C", "#78C3FB", "#ACE4AA", "#F7B801"]

  const activeStyle = {
    textDecoration: "underline",
    color: "darkblue",
  };

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined);

  function changeBackground() {
    let backgroundColour = document.querySelector('body')
    setColourIndex((prev) => prev + 1);
    if (colourIndex >= colours.length) {
      setColourIndex(0);
      backgroundColour.style.backgroundColor = colours[colourIndex];
    } else {
      backgroundColour.style.backgroundColor = colours[colourIndex];
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("starting timer")
      setCount(prev => prev + 1)
      changeBackground()
    }, (5000))

    return () => {
      console.log("cleaning timer");
      clearInterval(timer)
      changeBackground()
    }
  },[count])
  
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
