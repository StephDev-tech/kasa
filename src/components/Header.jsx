import logo from '../assets/logo_kasa.svg'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
			<img src={logo} alt="logo Kasa"/>
			<nav className="nav">
                <NavLink to="/" className='link'>Accueil</NavLink>				
                <NavLink to="/about" className='link'>A propos</NavLink>
			</nav>
		</div>
    )
}

export default Header