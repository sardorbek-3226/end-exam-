import { useState } from "react";
import "./navbars.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo"><img src="/images/logo.svg" alt="" /></div>

        <ul className="navbar__links">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/about" className="nav__link">About</Link></li>
          <li><Link to="/receipes" className="nav__link">Receipes</Link></li>
        </ul>

        <button
          className="center-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="navbar__cta">
          <button className="btn">Browse recipes</button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-panel">
          <ul className="mobile-links">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/about" className="nav__link">About</Link></li>
          <li><Link to="/receipes" className="nav__link">Receipes</Link></li>
            <li><button className="btn mobile-button"> Browse recipes</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
