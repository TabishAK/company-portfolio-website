import logo from "../../images/roklin_white2.png";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div
      className="navbar"
      style={{
        borderTop: "0.5px solid white",
        padding: "0px 0px 0px",
        marginTop: "1.5rem",
        borderBottom: "0.5px solid white",
      }}
    >
      <nav className="navbar container" style={{ zIndex: 1 }}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/work/photography"
                activeClassName="active"
                className="nav-links"
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about-us"
                activeClassName="active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active"
                className="nav-links contact-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <MdCancel
                style={{
                  color: "white",
                  top: "20px",
                  position: "relative",
                  fontSize: 32,
                }}
              />
            ) : (
              <AiOutlineBars
                style={{
                  color: "white",
                  top: "20px",
                  position: "relative",
                  fontSize: 32,
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
