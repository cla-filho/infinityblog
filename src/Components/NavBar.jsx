import { Link} from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>
            <Link to={`/`}>infinity Blog </Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/new`} className="new-btn">novo post </Link>
                </li>
                <li>
                    <Link to={`/admin`}>gerenciar</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;