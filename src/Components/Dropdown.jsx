import { Link } from 'react-router-dom';
import burgerMenu from '../assets/burger-menu.svg';

function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropdown__btn">
        <img src={burgerMenu} alt="" />
      </button>
      <nav className="dropdown__nav">
        <ul>
          <li>
            <Link to="/" className="dropdown__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="dropdown__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="dropdown__link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="dropdown__link">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" className="dropdown__link">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="dropdown__link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
