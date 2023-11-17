import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moi from "../../images/moi.jpeg";
import { BrowserRouter as Router } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // const burgerLogo = document.getElementById("burger-logo");
  // const burgerNav = useRef(null);

  // burgerLogo.addEventListener("click", () => {
  //   if (burgerNav.current.style.display === "flex") {
  //     burgerNav.current.style.display = "none";
  //   } else {
  //     burgerNav.current.style.display = "flex";
  //   }
  // });

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

              <button id="burger-logo" className="burger-logo">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className="burger-links">
                <ul
                  // ref={burgerNav}
                  id="burger-navigation-ul"
                  className="burger-navigation-ul"
                >
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
