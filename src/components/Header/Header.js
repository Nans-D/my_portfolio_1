import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moi from "../../images/moi.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "../Contact/Contact";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Router>
      <div>
        <div className="container-child">
          <img id="logo-img" src={moi} alt="moi" />
          <nav className="navigation">
            <div id="mySidenav" class="sidenav">
              <a id="closeBtn" href="#/" class="close">
                ×
              </a>
              <ul className="navigation-ul">
                <li>
                  <a href="#/">Skills</a>
                </li>
                <li>
                  <a href="#/">Projects</a>
                </li>
                <li>
                  <a href="#/">Contact</a>
                </li>
                <li>
                  <a href="#/">Experience</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default Header;
