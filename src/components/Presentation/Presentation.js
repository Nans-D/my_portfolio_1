import "./Presentation.css";
import moi from "../../images/moi.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Presentation() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadCvClick = (e) => {
    setShowPopup(true);
    e.preventDefault();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="presentation-container">
        <div className="presentation-container-child">
          <div className="presentation-container-text">
            <h4 className="hi-container gradient-color-text">Hey there! I'm</h4>
            <h1 className="my-name-container gradient-color-text">
              Nans Delaubert
            </h1>
            <p className="description-container">
              I'm a <span className="gras-text">Front-end Developer</span> based
              in France, and i'm very passionate about solving problems to help
              people creating website
            </p>
          </div>
          <div className="a-container">
            <a
              href="https://github.com/Nans-D"
              target="blank"
              className="btn-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nans-delaubert/"
              className="btn-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              Linkedin
            </a>
            <a href="/#" className="btn-link" onClick={handleDownloadCvClick}>
              <FontAwesomeIcon icon={faDownload} />
              Télécharger CV
            </a>
          </div>
        </div>
        <div className="logo-container">
          <img id="logo-imgg" src={moi} alt="test" />
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-description-container">
              <img id="popup-logo-imgg" src={moi} alt="test" />
              <div id="popup-description-p">
                <p>Nans Delaubert</p>
                <p>ndelaubert@gmail.com</p>
                <p>07.70.02.99.92</p>
                <p>Le temps c'est de l'argent</p>
              </div>
            </div>
            <div className="popup-download-btn">
              <a href="../../../public/cv_nans_delaubert.pdf" download="">
                Téléchargez mon CV <FontAwesomeIcon icon={faFile} />
              </a>
              <button className="btn-link" onClick={handleClosePopup}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Presentation;
