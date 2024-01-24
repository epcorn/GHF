import email from "../images/social/email.png";
import phone from "../images/social/phoneNav.png";
import logo from "../images/2.png";
import menu from "../images/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { pageLinks, socialMedia } from "./Utils";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <header className="container-fluid sticky-top">
      <div className="header-top">
        <div className="container">
          <div className="row col-det">
            <div className="col-lg-5 col-md-7 cont">
              <ul className="ulleft">
                <li>
                  <img src={email} className="pb-1 mx-1" alt="email" />
                  <small> ghf.org.in@gmail.com</small>
                </li>
                <li>
                  <img src={phone} className="pb-1" alt="phone" />
                  <small> +7400 453 069</small>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 follows d-flex justify-content-lg-start">
              <ul className="ulright">
                <li className="follow-li">
                  <small>Follow Us :</small>
                </li>
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img src={item.image} alt={item.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block col-md-5 d-flex justify-content-center btn-bhed">
              <Link to="/ContactUs">
                <button className="btn btn-sm btn-success">Join Us</button>
              </Link>
              <button className="btn btn-sm btn-default">Donate</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="mobile-nav">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              aria-controls="navbarNav"
              aria-label="toggle navigation"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <img src={menu} alt="menu" style={{ width: 35 }} />
            </button>
          </div>
          <div
            className={`navbar-collapse ${!expand ? "collapse" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {pageLinks.map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link
                    to={item.link}
                    className="nav-link text-center"
                    
                    aria-current="page"
                    onClick={() => {
                      setExpand(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
