import Logo from '../assets/Logo.svg';

function Header() {
  return (
    <header>
      <a href="/home">
        <img src={Logo} alt="Little Lemon logo" />
      </a>
    </header>
  );
}

export default Header;
