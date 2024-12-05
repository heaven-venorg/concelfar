const Navbar = () => {
  return (
    <nav className="nav-menu">
      <a className="nav-brand" href="/">
        CONCELFAR V.1
      </a>
      <div className="menu">
        <a href="/celtofah" className="menu-item">
          Celcius - Fahrenheit
        </a>
        <a href="/fahtocel" className="menu-item">
          Fahrenheit - Celcius
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
