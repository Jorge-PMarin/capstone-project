import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Dropdown from '../components/Dropdown';

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={Logo} alt="Little Lemon logo" />
      </Link>

      <nav className="header__navbar">
        <ul>
          <li>
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="header__link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="header__link">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" className="header__link">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="header__link">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <Dropdown />
    </header>
  );
}

export default Navbar;
