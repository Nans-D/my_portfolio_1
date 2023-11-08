import './Header.css'
import moi from '../../images/rick.jpeg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Contact } from '../Contact/Contact';

function Header(){
    return (
        <Router>
            <div>
                <div className="container-child">

                <img id="logo-img" src={moi} alt="moi" />
                <nav className='navigation'>
                    <ul className='navigation-ul'>
                        <li><a className="texte-avec-trait" href="#skill">Skills</a></li>
                        <li><a className="texte-avec-trait" href="#projects">Projects</a></li>
                        <li><Link className="texte-avec-trait" to="/Contact">Contact</Link></li>
                        <li><a className="texte-avec-trait" href="#experience">Experience</a></li>
                    </ul>
                </nav>
                </div>
                {/* Les Routes doivent être en dehors de la navigation mais toujours à l'intérieur du Router */}
                <Routes>
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Header;
