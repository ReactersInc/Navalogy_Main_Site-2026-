import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import site from "../../data/site.json";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================================
     Scroll state
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     Prevent background scrolling when mobile menu is open
     ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     Close mobile menu
     ========================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /* =========================================================
     Brand / Home navigation
     ========================================================= */

  const handleBrandClick = (event) => {
    closeMobileMenu();

    /*
     * If already on homepage, prevent React Router from
     * doing anything and simply scroll to the top.
     */
    if (location.pathname === "/") {
      event.preventDefault();

      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
     * If on another page, allow NavLink to navigate
     * normally to the homepage.
     */
  };

  /* =========================================================
     People navigation
     ========================================================= */

  const handlePeopleClick = (event) => {
    event.preventDefault();

    closeMobileMenu();

    /*
     * If already on homepage, scroll directly to the
     * featured lead section.
     */
    if (location.pathname === "/") {
      const peopleSection =
        document.getElementById("people");

      if (peopleSection) {
        peopleSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
     * If on another page, navigate to homepage with
     * the people hash.
     */
    navigate("/#people");
  };

  /* =========================================================
     Handle People hash after navigating to homepage
     ========================================================= */

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.hash === "#people"
    ) {
      const timeout = setTimeout(() => {
        const peopleSection =
          document.getElementById("people");

        if (peopleSection) {
          peopleSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname, location.hash]);

  /* =========================================================
     Render
     ========================================================= */

  return (
    <>
      {/* =====================================================
          Navbar
          ===================================================== */}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">

          {/* =================================================
              Brand
              ================================================= */}

          <NavLink
            to="/"
            className="navbar-brand"
            onClick={handleBrandClick}
          >
            <span className="navbar-brand-mark">
              N
            </span>

            <span className="navbar-brand-text">
              {site.name.toLowerCase()}
              <span>.com</span>
            </span>
          </NavLink>


          {/* =================================================
              Desktop Navigation
              ================================================= */}

          <nav className="navbar-nav">

            {site.navigation.map((item) => {

              /*
               * People is temporarily handled as a
               * homepage anchor until the dedicated
               * People page is ready.
               */
              if (item.label === "People") {
                return (
                  <a
                    key={item.path}
                    href="/#people"
                    className="navbar-link"
                    onClick={handlePeopleClick}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `navbar-link ${
                      isActive
                        ? "navbar-link-active"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}

          </nav>


          {/* =================================================
              Desktop CTA
              ================================================= */}

          <NavLink
            to="/research"
            className="navbar-cta"
          >
            <span>Explore Research</span>
            <ArrowUpRight size={15} />
          </NavLink>


          {/* =================================================
              Mobile Menu Button
              ================================================= */}

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
              setMobileOpen(
                (previous) => !previous
              )
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


      {/* =====================================================
          Mobile Navigation
          ===================================================== */}

      <div
        className={`mobile-navigation ${
          mobileOpen
            ? "mobile-navigation-open"
            : ""
        }`}
      >
        <div className="mobile-navigation-inner">

          {/* Navigation label */}

          <div className="mobile-navigation-label">
            Navigation
          </div>


          {/* Navigation links */}

          <nav className="mobile-navigation-links">

            {site.navigation.map(
              (item, index) => {

                /*
                 * People gets the temporary homepage
                 * anchor behavior.
                 */
                if (item.label === "People") {
                  return (
                    <a
                      key={item.path}
                      href="/#people"
                      onClick={handlePeopleClick}
                      className="mobile-navigation-link"
                    >
                      <span className="mobile-navigation-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span>
                        {item.label}
                      </span>

                      <ArrowUpRight size={18} />
                    </a>
                  );
                }

                /*
                 * All other navigation items use
                 * React Router normally.
                 */
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="mobile-navigation-link"
                  >
                    <span className="mobile-navigation-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span>
                      {item.label}
                    </span>

                    <ArrowUpRight size={18} />
                  </NavLink>
                );
              }
            )}

          </nav>


          {/* =================================================
              Mobile Footer
              ================================================= */}

          <div className="mobile-navigation-footer">

            <span>
              {site.domain}
            </span>

            <span>
              {site.footer.description}
            </span>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;