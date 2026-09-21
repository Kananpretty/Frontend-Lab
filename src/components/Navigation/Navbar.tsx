import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="frontend-lab-menu">
      <ul className="menu-list">
        <li className="menu-list-item">
          <a href="#" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-list-item">
          <a href="#" className="menu-link">
            About Me
          </a>
        </li>
        <li className="menu-list-item">
          <a href="#" className="menu-link">
            Frontend Mentor Challenges
          </a>
        </li>
        <li className="menu-list-item">
          <a href="#" className="menu-link">
            React Challenges
          </a>
        </li>
        <li className="menu-list-item">
          <a href="#" className="menu-link">
            Javascript/Typescript Kata
          </a>
        </li>
        <li className="menu-list-item">
          <a href="#" className="menu-link">
            Javascript Polyfills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
