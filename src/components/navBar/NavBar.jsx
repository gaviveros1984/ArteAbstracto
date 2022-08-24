import logo from '../../img/abstrArt.png' 
import './NavBar.css'

function NavBar(props) {
  return (
    <nav className="nav">
        <a className="nav-link" href="#">Abstr<strong>Art</strong></a>
        <a className="nav-link" href="#">Artistas</a>
        <a className="nav-link" href="#">Obras</a>
        {props.children}
        </nav>
  );
}

export default NavBar;  