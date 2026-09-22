import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import research from "../data/research.json";
import DomainGrid from "../components/research/DomainGrid";

function Research() {
  return (
    <div className="research-page">

      {/* =====================================================
          Research Hero
          ===================================================== */}

      <section className="research-page-hero">
        <div className="container">
          <div className="section-label">
            Research Domains
          </div>

          <div className="research-page-hero-grid">
            <h1 className="research-page-title">
              Engineering
              <br />
              across boundaries.
            </h1>

            <div className="research-page-intro">
              <p>
                Navalogy explores secure and intelligent
                infrastructure across healthcare, networking,
                distributed trust, and energy-aware edge systems.
              </p>

              <div className="research-page-index">
                <span>Active domains</span>
                <strong>
                  {String(research.length).padStart(2, "0")}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          Research Domains
          ===================================================== */}

      <section className="research-page-content">
        <div className="container">

          <div className="research-page-section-header">
            <div className="section-label">
              Areas of Investigation
            </div>

            <p>
              Each research domain represents a connected area
              of investigation within the Navalogy ecosystem.
            </p>
          </div>

          <DomainGrid />

        </div>
      </section>


      {/* =====================================================
          Research CTA
          ===================================================== */}

      <section className="research-page-cta">
        <div className="container">
          <div className="research-page-cta-inner">

            <div>
              <div className="section-label">
                Research Output
              </div>

              <h2>
                Explore the work
                <br />
                behind the domains.
              </h2>
            </div>

            <Link
              to="/publications"
              className="button button-primary"
            >
              View publications
              <ArrowUpRight size={16} />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Research;