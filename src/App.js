import React from "react";
import { HashRouteRoutes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Account from "./Account";
import Profile from "./Profile";
import Settings from "./Settings";
import ThankYou from "./ThankYou";
import NotFound from "./NotFound";

export default function App() {
  return (
    <HashRouter>
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Harshini's React Lab</h2>
      <NavBar />
      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="/account/*" element={<Account />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
</HashRouter>
  );
}
