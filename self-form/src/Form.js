import React, { useState } from "react";
import "./Form.scss";
import GiantLogo from "../src/Assets/GiantRobotLTD_Logo.svg";
import Arrow from "../src/Assets/White_Arrow.svg";

const initialFormState = {
  firstName: "",
  lastName: "",
  address: "",
  address2: "",
};

export default function Form() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };

  return (
    <>
      <div className="container">
        <section className="welcome__section">
          <img src={GiantLogo} alt="giant-logo" />
          <p className="welcome__section-title">Welcome</p>
          <p className="welcome__section-info">
            Please tell us a bit about yourself to get started.
          </p>
        </section>

        <section className="form__section">
          <form onSubmit={handleSubmit}>
            <label>FIRST NAME</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={form.firstName}
              required
            />

            <label>LAST NAME</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={form.lastName}
              required
            />

            <label>ADDRESS</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={form.address}
              required
            />

            <label>ADDRESS 2 (OPTIONAL)</label>
            <input
              type="text"
              name="address2"
              onChange={handleChange}
              value={form.address2}
            />
            <button type="submit">
              Next <img src={Arrow} alt="arrow" />
            </button>
          </form>
          <pre>{user && JSON.stringify(user, null, 2)}</pre>
        </section>
      </div>
    </>
  );
}
