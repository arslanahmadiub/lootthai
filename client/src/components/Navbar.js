import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  handleClick = () => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  };
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Lotto-Thai
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  onClick={this.handleClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="result"
                  className="nav-link"
                  href="#"
                  onClick={this.handleClick}
                >
                  Lottery Result
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="play"
                  className="nav-link"
                  href="#"
                  onClick={this.handleClick}
                >
                  How to Play?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  href="#about"
                  onClick={this.handleClick}
                >
                  About Us
                </Link>
              </li>
              {!this.props.user && (
                <li className="nav-item">
                  <Link
                    to="admin"
                    className="nav-link"
                    href="#"
                    onClick={this.handleClick}
                  >
                    Admin Login
                  </Link>
                </li>
              )}
              {this.props.user && (
                <li className="nav-item">
                  <Link
                    to="dashboard"
                    className="nav-link"
                    href="#"
                    onClick={this.handleClick}
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              {this.props.user && (
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.handleLogout}>
                    Admin Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
