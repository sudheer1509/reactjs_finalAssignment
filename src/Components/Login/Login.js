import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors) !== 0 && isSubmit) {
      console.log(formValues);
      if (formValues.username === formValues.password) {
        setIsLoggedIn(true);
      } else {
        alert("username and password should be same");
      }
    }
    if (isLoggedIn === true) {
      navigate("/dashboard");
      console.log("going to dashboard");
      setFormValues({
        username: "",
        password: "",
      });
    }
  };

  const validate = (values) => {
    const error = {};
    if (!values.username) {
      error.username = "Username is required";
    } else if (values.username.length < 5) {
      error.username = "username length must be greater than 5";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };
  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <div className="formHeading">Welcome to Dashboard, Login</div>

        <div className="field">
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            autoComplete="current-username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p className="errorMessage">{formErrors.username}</p>
        <div className="field">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formValues.password}
            autoComplete="current-password"
            onChange={handleChange}
          />
        </div>
        <p className="errorMessage">{formErrors.password}</p>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
