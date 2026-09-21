import githubLogo from "../../assets/github-logo.svg";
import linkedingLogo from "../../assets/linkedin-logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="frontend-lab-footer">
      <p className="footer-text">Find me online</p>
      <ul className="social-links">
        <li className="social-links-items">
          <a href="#">
            <img
              src={linkedingLogo}
              alt="Linkedin"
              aria-hidden="false"
              className="social-links-logo"
            />
          </a>
        </li>
        <li className="social-links-items">
          <a href="#">
            <img
              src={githubLogo}
              alt="Github"
              aria-hidden="false"
              className="social-links-logo"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
