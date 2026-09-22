import logo from "../../assets/logo.svg";
import menuLogo from "../../assets/menu.svg";
import closeLogo from "../../assets/close-menu.svg";
import Navbar from "../Navigation/Navbar";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(true);
  };

  return (
    <header className="frontend-lab-header">
      <img src={logo} alt="Frontend Lab Logo" className="frontend-lab-logo" />
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={handleMenuToggle}
      >
        <img
          src={isMenuOpen ? closeLogo : menuLogo}
          alt=""
          className="menu-icon"
        />
      </button>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
