import { useState } from "react";
import "./Projects.css";
import projectAlloCine from "../../images/Capture d’écran 2023-12-08 à 22.19.33.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const [backCard, setBackCard] = useState(false);

  return (
    <div>
      <div className="projects-container">
        <h1 id="project-title">Projects</h1>

        <div className="projects-cards-container">
          <div
            onMouseEnter={() => {
              setBackCard(true);
            }}
            onMouseLeave={() => {
              setBackCard(false);
            }}
            className="projects-card"
          >
            {!backCard ? null : (
              <div className="projects-card-backCard">
                <a className="projects-card-backCard-title-container" href="">
                  <div className="projects-card-backCard-title">
                    Check Website
                  </div>
                </a>
              </div>
            )}
            <div className="projects-card-title">ReactCine</div>
            <img src={projectAlloCine} alt="" />
            <div className="languages-projects-container">
              <div className="language-projects-container">
                <FontAwesomeIcon className="fa-react-icon" icon={faReact} />
                <p>React.js</p>
              </div>
              <div className="language-projects-container">
                <FontAwesomeIcon className="fa-js-icon" icon={faJs} />
                <p>Javascript</p>
              </div>
              <div className="language-projects-container">
                <FontAwesomeIcon className="fa-js-icon" icon={faJs} />
                <p>API</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="load-wrapp">
          <div class="load-6">
            <div class="letter-holder">
              <div class="l-1 letter">L</div>
              <div class="l-2 letter">o</div>
              <div class="l-3 letter">a</div>
              <div class="l-4 letter">d</div>
              <div class="l-5 letter">i</div>
              <div class="l-6 letter">n</div>
              <div class="l-7 letter">g</div>
              <div class="l-8 letter">.</div>
              <div class="l-9 letter">.</div>
              <div class="l-10 letter">.</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
