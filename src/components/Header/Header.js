import './Header.css'
import moi from '../../images/rick.jpeg'

function Header(){
    return <div>
        <div class="container-child">

        <img id="logo-img" src={moi} alt="moi" />
        <nav className='navigation'>
            <ul className='navigation-ul'>
                <li><a className="texte-avec-trait" href="#skill">Skills</a></li>
                <li><a className="texte-avec-trait" href="#projects">Projects</a></li>
                <li><a className="texte-avec-trait" href="#/">Contact</a></li>
                <li><a className="texte-avec-trait" href="#/">Experience</a></li>
            </ul>
        </nav>
        </div>
    </div>
}

export default Header