import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Account() {
  return (
    <div className="card">
      <h3>Account</h3>
      <div style={{ marginBottom: 10 }}>
        <NavLink to="profile" style={({ isActive }) => ({ marginRight: 8, fontWeight: isActive ? 700 : 400 })}>
          Profile
        </NavLink>
        <NavLink to="settings" style={({ isActive }) => ({ marginRight: 8, fontWeight: isActive ? 700 : 400 })}>
          Settings
        </NavLink>
      </div>

      <div style={{ border: "1px dashed #ccc", padding: 12 }}>
        <Outlet />
      </div>
    </div>
  );
}
