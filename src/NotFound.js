import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card">
      <h3>404 — Not Found</h3>
      <Link to="/">Go home</Link>
    </div>
  );
}
