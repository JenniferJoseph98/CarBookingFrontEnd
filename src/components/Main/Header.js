import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/main">
        <img
          className="logo"
          alt="logo"
          style={{ maxHeight: "45px", maxWidth: "45px", marginTop: "10px" }}
          src="https://logodix.com/logo/2024303.jpg"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/main">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/book">
              Booking slot
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/order">
              Order
            </a>
          </li>
        </ul>
        <span
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          class="navbar-text"
        >
          Logout
        </span>
      </div>
    </nav>
  );
}

export default Header;
