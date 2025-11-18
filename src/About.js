import React from "react";

export default function About() {
  return (
    <div className="card">
      <h3>About Us</h3>

      <section>
        <h4>Who we are</h4>
        <p>We are learners and developers practicing React fundamentals.</p>
      </section>

      <section>
        <h4>Our mission</h4>
        <p>Provide clear example projects to learn routing and form handling.</p>
      </section>

      <section>
        <h4>Tech stack</h4>
        <ul>
          <li>React</li>
          <li>React Router v6</li>
          <li>JavaScript / HTML / CSS</li>
        </ul>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/786/935/non_2x/a-woman-works-on-a-laptop-computer-and-talks-on-the-phone-sitting-at-a-table-at-home-with-a-cup-of-coffee-and-papers-illustration-flat-vector.jpg"
          alt="tech stack"
          style={{ display: "block", marginTop: 8, maxWidth: "100%" }}
        />
      </section>
    </div>
  );
}
