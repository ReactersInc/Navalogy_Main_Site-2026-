import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import site from "../../data/site.json";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-name">
              {site.name.toLowerCase()}
              <span>.com</span>
            </Link>

            <p className="footer-description">
              {site.description}
            </p>
          </div>

          <div className="footer-navigation">
            <div className="footer-label">
              Navigate
            </div>

            <nav className="footer-links">
              {site.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="footer-link"
                >
                  {item.label}
                  <ArrowUpRight size={13} />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.footer.copyright}
          </span>

          <span>
            {site.domain}
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;