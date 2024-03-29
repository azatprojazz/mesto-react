import logo from '../images/header-logo.svg';

function Header() {
  // Компонент Header возвращает JSX-разметку с логотипом
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип Россия" />
    </header>
  );
}

export default Header;
