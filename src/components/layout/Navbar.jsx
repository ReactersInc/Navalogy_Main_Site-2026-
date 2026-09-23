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
     Scroll to homepage section
     ========================================================= */

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(
        `Navalogy: section #${sectionId} was not found.`
      );
      return false;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return true;
  };

  /* =========================================================
     Brand / Home navigation
     ========================================================= */

  const handleBrandClick = (event) => {
    closeMobileMenu();

    if (location.pathname === "/") {
      event.preventDefault();

      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* =========================================================
     People / Projects navigation
     ========================================================= */

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();

    closeMobileMenu();

    /*
     * Already on homepage:
     * scroll directly to the section.
     */
    if (location.pathname === "/") {
      scrollToSection(sectionId);

      /*
       * Keep URL clean. We don't actually need the hash
       * for scrolling when already on the homepage.
       */
      window.history.replaceState(
        null,
        "",
        `/#${sectionId}`
      );

      return;
    }

    /*
     * On another page:
     * first navigate to homepage.
     */
    navigate(`/#${sectionId}`);
  };

  /* =========================================================
     Handle section navigation after returning home
     ========================================================= */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.substring(1);

    /*
     * Give React enough time to render Home.jsx
     * before looking for the section.
     */
    let attempts = 0;

    const findAndScroll = () => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      /*
       * Retry a few times in case the Home component
       * has not finished rendering yet.
       */
      attempts += 1;

      if (attempts < 20) {
        setTimeout(findAndScroll, 50);
      }
    };

    findAndScroll();
  }, [location.pathname, location.hash]);

  /* =========================================================
     Render
     ========================================================= */

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


          {/* Desktop Navigation */}

          <nav className="navbar-nav">

            {site.navigation.map((item) => {

              /*
               * People and Projects are homepage
               * section navigation.
               */
              if (
                item.label === "People" ||
                item.label === "Projects"
              ) {
                const sectionId =
                  item.label === "People"
                    ? "people"
                    : "projects";

                return (
                  <a
                    key={item.path}
                    href={`/#${sectionId}`}
                    className="navbar-link"
                    onClick={(event) =>
                      handleSectionClick(
                        event,
                        sectionId
                      )
                    }
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
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              );
            })}

          </nav>


          {/* Desktop CTA */}

          <NavLink
            to="/research"
            className="navbar-cta"
            onClick={closeMobileMenu}
          >
            <span>Explore Research</span>
            <ArrowUpRight size={15} />
          </NavLink>


          {/* Mobile Menu Button */}

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


      {/* Mobile Navigation */}

      <div
        className={`mobile-navigation ${
          mobileOpen
            ? "mobile-navigation-open"
            : ""
        }`}
      >
        <div className="mobile-navigation-inner">

          <div className="mobile-navigation-label">
            Navigation
          </div>

          <nav className="mobile-navigation-links">

            {site.navigation.map(
              (item, index) => {

                /*
                 * People and Projects.
                 */
                if (
                  item.label === "People" ||
                  item.label === "Projects"
                ) {
                  const sectionId =
                    item.label === "People"
                      ? "people"
                      : "projects";

                  return (
                    <a
                      key={item.path}
                      href={`/#${sectionId}`}
                      onClick={(event) =>
                        handleSectionClick(
                          event,
                          sectionId
                        )
                      }
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