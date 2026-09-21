import "./App.css";
import logo from "./assets/logo.svg";
import menuLogo from "./assets/menu.svg";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Frontend Lab Logo" />
        <button className="menu-button" aria-label="Open menu" id="menu-button">
          <img src={menuLogo} alt="" className="menu-icon" id="menu-icon" />
        </button>
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
      </header>
      <main className="frontend-lab-main">
        <header className="intro">
          <h1 className="heading">Kanan's Frontend Lab</h1>
          <p className="sub-heading">
            Welcome to my Frontend Lab — a collection of my frontend development
            practice, experiments, challenges, and personal projects.
          </p>
          <p className="sub-heading">
            This is where I document what I'm learning and build things to
            strengthen my frontend fundamentals.
          </p>
        </header>
        <section>
          <h2>Explore the Lab</h2>
          <div className="lab-card-grid">
            <a href="#" className="lab-card">
              <h3>Frontend Mentor Challenges</h3>
              <p>
                Practising HTML, CSS, JavaScript, responsive design,
                accessibility, and React through Frontend Mentor challenges.
              </p>
            </a>
            <a href="#" className="lab-card">
              <h3>React Challenges</h3>
              <p>
                Small projects focused on React components, state, events, and
                practical React concepts.
              </p>
            </a>

            <a href="#" className="lab-card">
              <h3>JavaScript / TypeScript Katas</h3>
              <p>
                Coding exercises for strengthening JavaScript and TypeScript
                fundamentals and problem-solving.
              </p>
            </a>

            <a href="#" className="lab-card">
              <h3>JavaScript Polyfills</h3>
              <p>
                Implementations of common JavaScript methods to understand how
                they work under the hood.
              </p>
            </a>

            <a href="#" className="lab-card">
              <h3>Personal Projects</h3>
              <p>
                Larger projects where I bring together the concepts I'm learning
                and experiment with frontend and full-stack technologies.
              </p>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>Find me online:</p>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">Indeed</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
