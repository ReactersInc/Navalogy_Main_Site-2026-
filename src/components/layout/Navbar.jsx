import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import site from "../../data/site.json";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">
          {/* Brand */}
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={closeMobileMenu}
          >
            <span className="navbar-brand-mark">
              N
            </span>

            <span className="navbar-brand-text">
              {site.name.toLowerCase()}
              <span>.com</span>
            </span>
          </NavLink>

          {/* Desktop navigation */}
          <nav className="navbar-nav">
            {site.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar-link ${
                    isActive ? "navbar-link-active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <NavLink
            to="/research"
            className="navbar-cta"
          >
            <span>Explore Research</span>
            <ArrowUpRight size={15} />
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className="navbar-menu-button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((previous) => !previous)
            }
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className={`mobile-navigation ${
          mobileOpen ? "mobile-navigation-open" : ""
        }`}
      >
        <div className="mobile-navigation-inner">
          <div className="mobile-navigation-label">
            Navigation
          </div>

          <nav className="mobile-navigation-links">
            {site.navigation.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className="mobile-navigation-link"
              >
                <span className="mobile-navigation-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>

                <ArrowUpRight size={18} />
              </NavLink>
            ))}
          </nav>

          <div className="mobile-navigation-footer">
            <span>{site.domain}</span>

            <span>{site.footer.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;