import logo from '../../img/abstrArt.png' 
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <nav className="nav">

      <Link to='/'>
        <li>Abstr<strong>Art</strong></li>
      </Link>

      <Link to='/categoria/silla'>
        <li>Silla</li>      
      </Link>

      <Link to='/categoria/electronica'>
      <li>Electronica</li>
      </Link>

      {props.children}

      </nav>
  );
}

export default NavBar;  