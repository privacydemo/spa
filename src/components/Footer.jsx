import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/appointment"}>Appointment</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Developed by</h4>
            <p>Aidan Morrissey</p>
          </div>
          <div>
            <a className="optanon-toggle-display"><h4>Your Privacy Choices</h4></a>
          </div>
        </div>
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Life Care Hospital</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
