import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  marginRight: 12,
  padding: "6px 10px",
  textDecoration: "none",
  borderRadius: 6,
};

function activeStyle(isActive) {
  return {
    fontWeight: isActive ? "700" : "400",
    backgroundColor: isActive ? "#e0f0ff" : "transparent",
    color: "#003a63",
  };
}

export default function NavBar() {
  return (
    <nav style={{ borderBottom: "1px solid #ddd", paddingBottom: 10 }}>
      <NavLink to="/" style={({ isActive }) => ({ ...linkStyle, ...activeStyle(isActive) })}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ ...linkStyle, ...activeStyle(isActive) })}>
        About
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ ...linkStyle, ...activeStyle(isActive) })}>
        Contact
      </NavLink>
      <NavLink to="/feedback" style={({ isActive }) => ({ ...linkStyle, ...activeStyle(isActive) })}>
        Feedback
      </NavLink>
      <span style={{ marginLeft: 6 }}>
        <NavLink to="/account/profile" style={({ isActive }) => ({ ...linkStyle, ...activeStyle(isActive) })}>
          Account → Profile
        </NavLink>
        <NavLink to="/account/settings" style={({ isActive }) => ({ ...linkStyle, ...activeStyle(isActive) })}>
          Account → Settings
        </NavLink>
      </span>
    </nav>
  );
}
