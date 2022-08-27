import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  let auth = false;
  const [isLoggedIn, setIsLoggedIn] = useState(auth);
  localStorage.setItem("isLoggedIn", JSON.stringify(auth));
  // setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
  console.log("Header", isLoggedIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light headerContainer">
      <a className="headerBrand" href="/">
        product admin
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <a className="nav-link text " href="/dashboard">
              <i className="fas fa-2x fa-tachometer-alt" aria-hidden="true"></i>
              <span>Dashboard</span>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link nav-light " href="/products">
              <i className="fas fa-2x fa-shopping-cart" aria-hidden="true"></i>
              <span>products</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link  " href="/accounts">
              <i className="far fa-2x fa-user" aria-hidden="true"></i>
              <span>Accounts</span>
            </a>
          </li>
        </ul>
        {isLoggedIn === true ? (
          <a className="nav-link loginBtn" href="/dashboard">
            Admin,Logout
          </a>
        ) : (
          <a className="nav-item loginBtn" href="/">
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
