import { useState } from "react";
import "./Projects.css";

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
            <img src="" alt="" />
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
