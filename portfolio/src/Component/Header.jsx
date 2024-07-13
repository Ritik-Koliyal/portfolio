
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="header-container">
                <ul>
                    <li><Link to="/"  className="nav-link">Home</Link></li>
                    <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                    <li><Link to="/about" className="nav-link">About Me</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
