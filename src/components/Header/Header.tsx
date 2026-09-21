import logo from "../../assets/logo.svg";
import menuLogo from "../../assets/menu.svg";
import Navbar from "../Navigation/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="frontend-lab-header">
      <img src={logo} alt="Frontend Lab Logo" className="frontend-lab-logo" />
      <button className="menu-button" aria-label="Open menu" id="menu-button">
        <img src={menuLogo} alt="" className="menu-icon" id="menu-icon" />
      </button>
      <Navbar />
    </header>
  );
};

export default Header;
