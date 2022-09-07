import logo from '../../img/abstrArt.png' 
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <nav className="nav">

      <Link to='/'>
        <li>Abstr<strong>Art</strong></li>
      </Link>

      <Link to='/categoria/Pintura'>
        <li>Pintura</li>       
      </Link>

      <Link to='/categoria/Fotografía'>
      <li>Fotografía</li>
      </Link>

      {props.children}

      </nav>
  );
}

export default NavBar;  