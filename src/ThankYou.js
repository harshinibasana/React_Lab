import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();
  const name = location.state?.name ?? "Guest";
  return (
    <div className="card">
      <h3>Thank You</h3>
      <div style={{ border: "1px solid #d2f0d2", background: "#f0fff0", padding: 12, borderRadius: 6 }}>
        <strong>Success!</strong>
        <p>Thanks, {name}. We received your message and will be in touch shortly.</p>
      </div>
      <p style={{ marginTop: 12 }}>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
