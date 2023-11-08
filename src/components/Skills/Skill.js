import './Skill.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faReact } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass, faServer } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons'

function Skill(){
    return <div>
            <h1 id='skill-title'>Skills</h1>
        <div className="skills-container">
            <div className='front-end-container'>
                <p className='skills-title'>Front-end</p>
                    <ul className='cards-container'>
                        <li className='icons-container'>
                            <FontAwesomeIcon icon={faHtml5} />
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <FontAwesomeIcon icon={faJs} />
                            <FontAwesomeIcon icon={faReact} />
                        </li>
                        <li className='text-icons-container'>
                            <p className='p-html'>HTLM</p>
                            <p className='p-html'>CSS</p>
                            <p className='p-html'>JavaScript</p>
                            <p className='p-html'>React.js</p>
                        </li>
                    </ul>
                </div>
            <div className='back-end-container'>
                <p className='skills-title'>Back-end</p>
                    <ul className='cards-container'>
                        <li className='icons-container'>
                            <FontAwesomeIcon icon={faNodeJs} />
                            <FontAwesomeIcon icon={faServer} />
                        </li>
                        <li className='text-icons-container'>
                            <p className='p-html'>Node.js</p>
                            <p className='p-html'>REST API</p>
                        </li>
                    </ul>
                </div>
            <div className='back-end-container'>
                <p className='skills-title'>Softskills</p>
                    <ul className='cards-container'>
                        <li className='icons-container'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faBook} />
                            <FontAwesomeIcon icon={faCalendarXmark} />
                        </li>
                        <li className='text-icons-container'>
                            <p className='p-html'>Clever</p>
                            <p className='p-html'>Reader</p>
                            <p className='p-html'>On Time</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
}

export default Skill