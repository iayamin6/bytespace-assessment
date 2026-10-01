import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header container">
      <Link to="/" aria-label="ByteSpace home">
        <img
          className="logo"
          src="/assets/logo.svg"
          width="171"
          height="32"
          alt="ByteSpace"
        />
      </Link>
      <button
        className="menu-toggle icon-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
        onClick={() => setOpen(false)}
      >
        <div className="nav-center">
          <Link to="/">Home</Link>
          <a href="/#courses">Courses</a>
          <a href="/#creators">Creators</a>
        </div>
        <div className="nav-account">
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Join Us</Link>
          <Link to="/login" aria-label="Sign in to view your learning bag">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
