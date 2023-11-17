import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

export const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-title">Courses</div>
      <div className="courses-card-container">
        <a href="#/" className="card-container">
          <h3>Greta Hauts de Seine</h3>
          <p className="padding-p">Learn Js and React.js</p>
          <div className="languages-container">
            <div className="language-container">
              <FontAwesomeIcon className="fa-js-icon" icon={faJs} />
              <p>Javascript</p>
            </div>
            <div className="language-container">
              <FontAwesomeIcon className="fa-react-icon" icon={faReact} />
              <p>React.js</p>
            </div>
            <div className="language-container">
              <FontAwesomeIcon className="fa-react-icon" icon={faFileLines} />
              <p>JSON</p>
            </div>
          </div>
        </a>
        <a
          href="https://codelynx.dev/beginjavascript/v1"
          target="blank"
          className="card-container"
        >
          <h3>Begin Javascript & React</h3>
          <p className="padding-p">Courses by Melvynx to learn React</p>
          <div className="languages-container">
            <div className="language-container">
              <FontAwesomeIcon className="fa-js-icon" icon={faJs} />
              <p>Javascript</p>
            </div>
            <div className="language-container">
              <FontAwesomeIcon className="fa-react-icon" icon={faReact} />
              <p>React.js</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_535397279649_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_9108469_._pd__._&matchtype=&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzk7Az_q7W2mjmkOsrM0Qjmhi1IprXYloAQmF3DrFkGqlBb5ci4l0FMaAu5xEALw_wcB"
          target="blank"
          className="card-container"
        >
          <h3>React - The Complete Guide 2023</h3>
          <p className="padding-p">Courses by Maximilian Schwarzmuller</p>
          <div className="languages-container">
            <div className="language-container">
              <FontAwesomeIcon className="fa-js-icon" icon={faJs} />
              <p>Javascript</p>
            </div>
            <div className="language-container">
              <FontAwesomeIcon className="fa-react-icon" icon={faReact} />
              <p>React.js</p>
            </div>
            <div className="language-container">
              <FontAwesomeIcon className="fa-react-icon" icon={faNodeJs} />
              <p>Node.js</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
