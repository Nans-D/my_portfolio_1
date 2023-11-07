import './Skill.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons'

function Skill(){
    return <div>
        <div className="skills-container">
            <h1 id='skill-title'>Skills</h1>
            <div className='language-container'>
                <div className='language-container-child'>
                    <h3 className='front-end-text'>Front-end</h3>
                    <div className='icon-container'>
                        <div className='cards-container bg-orange'>
                            <FontAwesomeIcon icon={faHtml5} />
                            <div>
                                <p className='p-html'>HTLM</p>
                            </div>
                        </div>
                        <div className='cards-container bg-blue'>
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <div>
                                <p className='p-css'>CSS</p>
                            </div>
                        </div>
                        <div className='cards-container'>
                            <FontAwesomeIcon icon={faJs} />
                            <div>
                                <p className='p-js'>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='back-end-softskills-container'>
                    <div className='language-container-child'>
                        <h3 className='back-end-text'>Back-end</h3>
                        <div className='icon-container'>
                            <div className='cards-container'>
                                <FontAwesomeIcon icon={faNodeJs} />
                                <div>
                                    <p className='p-js'>NodeJS</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='language-container-child'>
                        <h3 className='soft-skills-text'>SoftSkills</h3>
                        <div className='icon-container'>
                            <div className='cards-container'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <div>
                                    <p className='p-js'>Curious</p>
                                </div>
                            </div>
                            <div className='cards-container'>
                                <FontAwesomeIcon icon={faBook} />
                                <div>
                                    <p className='p-js'>Reader</p>
                                </div>
                            </div>
                            <div className='cards-container'>
                                <FontAwesomeIcon icon={faCalendarXmark} />
                                <div>
                                    <p className='p-js'>Schedule</p>
                                </div>
                            </div>
                                
                        </div>
                    </div> 
                </div>
            </div>
        </div>
</div>
}

export default Skill