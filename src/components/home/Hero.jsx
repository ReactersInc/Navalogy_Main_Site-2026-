import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import site from "../../data/site.json";
import research from "../../data/research.json";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="section-label hero-label">
            Open Research & Development Collective
          </div>

          <h1 className="hero-title">
            Engineering
            <br />
            <span className="hero-title-accent">
              secure
            </span>{" "}
            intelligent
            <br />
            ecosystems.
          </h1>

          <p className="hero-description">
            {site.description}
          </p>

          <div className="hero-actions">
            <Link
              to="/research"
              className="button button-primary"
            >
              Explore research
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/publications"
              className="button button-secondary"
            >
              Research repository
            </Link>
          </div>
        </div>

        <div className="hero-index">
          <div className="hero-index-line" />

          <div className="hero-index-content">
            <span className="hero-index-label">
              Research Index
            </span>

            <span className="hero-index-value">
              01 — {String(research.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <Link
        to="/research"
        className="hero-scroll"
        aria-label="Explore research"
      >
        <span>Scroll to explore</span>

        <ArrowDown size={15} />
      </Link>

      <div className="hero-corner hero-corner-left">
        NAV / 001
      </div>

      <div className="hero-corner hero-corner-right">
        {new Date().getFullYear()} — R&D
      </div>
    </section>
  );
}

export default Hero;