import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moi from "../../images/moi.jpeg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleAnchorClick = (anchor) => {
    const anchorElement = document.getElementById(anchor);
    if (anchorElement) {
      // Faire défiler jusqu'à l'élément
      anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Ajouter un décalage après un court délai
      const offset = -200; // ajustez selon vos besoins
      setTimeout(() => {
        window.scrollBy({ top: offset });
      }, 0); // Le délai peut nécessiter un ajustement
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
              <a href="#courses" onClick={() => handleAnchorClick("courses")}>
                Courses
              </a>
            </li>
            {/* <li>
              <a
                href="#experiences"
                onClick={() => handleAnchorClick("experiences")}
              >
                Experience
              </a>
            </li> */}
            <li>
              {/* <Link to="/contact">Contact</Link> */}
              <a href="/contact" onClick={() => handleAnchorClick("contact")}>
                Contact
              </a>
            </li>
            <li>
              <Link to="/minigames">Minigames</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
