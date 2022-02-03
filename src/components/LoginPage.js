import React, { useState } from "react";
import "../styles/LoginPage.css";
import axios from "axios";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handlesChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bloomtechrecipebook.herokuapp.com/api/users/login", {
        username: "dave",
        password: "dave123",
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-top">
          <div className="icon"></div>
          <br />
          <span className="welcome-message">Welcome Chef!</span>
        </div>
        <div className="login-bottom">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                autoComplete="off"
                className="input-field"
                placeholder="Username"
                value={form.username}
                onChange={handlesChanges}
              />
              <label className="input-label">
                <span>Username</span>
              </label>
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
                value={form.password}
                onChange={handlesChanges}
              />
              <label className="input-label">
                <span>Password</span>
              </label>
              {error && <span>*Your username or password is incorrect</span>}
              <br />
              <br />
              <span>
                Not a member? <a href="/">Sign Up</a>
              </span>
            </div>
            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
