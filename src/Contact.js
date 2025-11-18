import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initial = {
  name: "",
  email: "",
  phone: "",
  subject: "Support",
  message: "",
  preferred: "Email",
  bestTime: "",
  agree: false,
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touchedSubmit, setTouchedSubmit] = useState(false);
  const navigate = useNavigate();

  // refs to focus invalid fields
  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    message: useRef(null),
    agree: useRef(null),
  };

  function validate(values) {
    const e = {};
    // Name
    if (!values.name || values.name.trim().length < 2) {
      e.name = "Full name is required (2-50 chars).";
    } else if (values.name.length > 50) {
      e.name = "Name must be 50 chars or fewer.";
    }

    // Email
    if (!values.email) {
      e.email = "Email is required.";
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(values.email)) e.email = "Enter a valid email.";
    }

    // Phone (optional but must be 10 digits if present)
    if (values.phone) {
      const digits = values.phone.replace(/\D/g, "");
      if (digits.length !== 10) e.phone = "Phone must be 10 digits.";
    }

    // Message
    if (!values.message || values.message.trim().length < 20) {
      e.message = "Message is required and must be at least 20 characters.";
    }

    // Agree
    if (!values.agree) {
      e.agree = "You must agree to terms.";
    }

    return e;
  }

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function focusFirstInvalid(errs) {
    const order = ["name", "email", "phone", "message", "agree"];
    for (const key of order) {
      if (errs[key] && refs[key] && refs[key].current) {
        try { refs[key].current.focus(); } catch {}
        break;
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouchedSubmit(true);
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      const name = form.name;
      setForm(initial);
      // show a success banner briefly then navigate OR just navigate with state
      navigate("/thank-you", { state: { name } });
    } else {
      focusFirstInvalid(validation);
    }
  }

  return (
    <div className="card">
      <h3>Contact (Controlled Form)</h3>

      <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 720 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Full Name *</label><br />
          <input
            ref={refs.name}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            aria-invalid={!!errors.name}
            aria-describedby="err-name"
            style={{ width: "100%", padding: 8 }}
          />
          <div id="err-name" style={{ color: "red", fontSize: 13 }}>
            {(touchedSubmit || form.name) && errors.name}
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Email *</label><br />
          <input
            ref={refs.email}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby="err-email"
            style={{ width: "100%", padding: 8 }}
          />
          <div id="err-email" style={{ color: "red", fontSize: 13 }}>
            {(touchedSubmit || form.email) && errors.email}
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Phone (optional, 10 digits)</label><br />
          <input
            ref={refs.phone}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="1234567890"
            aria-invalid={!!errors.phone}
            aria-describedby="err-phone"
            style={{ width: "100%", padding: 8 }}
          />
          <div id="err-phone" style={{ color: "red", fontSize: 13 }}>
            {touchedSubmit && errors.phone}
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Subject</label><br />
          <select name="subject" value={form.subject} onChange={handleChange} style={{ padding: 8 }}>
            <option>Support</option>
            <option>Sales</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Message *</label><br />
          <textarea
            ref={refs.message}
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            aria-invalid={!!errors.message}
            aria-describedby="err-message"
            style={{ width: "100%", padding: 8 }}
          />
          <div id="err-message" style={{ color: "red", fontSize: 13 }}>
            {(touchedSubmit || form.message) && errors.message}
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Preferred Contact Method</label><br />
          <label>
            <input type="radio" name="preferred" value="Email" checked={form.preferred === "Email"} onChange={handleChange} /> Email
          </label>{" "}
          <label>
            <input type="radio" name="preferred" value="Phone" checked={form.preferred === "Phone"} onChange={handleChange} /> Phone
          </label>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Best Time to Reach (optional)</label><br />
          <input name="bestTime" type="time" value={form.bestTime} onChange={handleChange} style={{ padding: 8 }} />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            <input ref={refs.agree} type="checkbox" name="agree" checked={form.agree} onChange={handleChange} /> I agree to terms *
          </label>
          <div style={{ color: "red", fontSize: 13 }}>{touchedSubmit && errors.agree}</div>
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={!isValid} style={{ padding: "8px 16px" }}>
            Submit
          </button>
          {!isValid && <span style={{ marginLeft: 12, color: "#666" }}>Form invalid — fix the fields above before submitting.</span>}
        </div>
      </form>
    </div>
  );
}
