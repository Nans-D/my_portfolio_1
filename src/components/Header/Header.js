import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moi from "../../images/moi.jpeg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleAnchorClick = (anchor) => {
    if (window.location.pathname === "/") {
      const anchorElement = document.getElementById(anchor);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/", { state: { anchor: anchor } });
    }
  };

  return (
    <div>
      <div className="container-child">
        <nav className="navigation">
          <div>
            <a
              href="#presentation"
              onClick={() => handleAnchorClick("presentation")}
            >
              <img id="logo-img" src={moi} alt="moi" />
            </a>
          </div>
          <button id="burger-logo" className="burger-logo">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="burger-links"></div>
          <ul className="navigation-ul">
            <li>
              <a href="#skill" onClick={() => handleAnchorClick("skill")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleAnchorClick("projects")}>
                Projects
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a
                href="#experiences"
                onClick={() => handleAnchorClick("experiences")}
              >
                Experience
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
