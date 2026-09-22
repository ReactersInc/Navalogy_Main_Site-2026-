import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import DomainGrid from "../research/DomainGrid";

function ResearchPreview() {
  return (
    <section className="research-section">
      <div className="container research-section-inner">
        <div className="research-header">
          <div className="research-header-main">
            <div className="section-label research-label">
              Research Domains
            </div>

            <h2 className="research-title">
              Research at the
              <br />
              edge of systems.
            </h2>
          </div>

          <p className="research-header-description">
            Navalogy investigates secure, intelligent, and distributed
            infrastructure across healthcare, networking, trust systems,
            and constrained edge environments.
          </p>
        </div>

        <DomainGrid />

        <div className="research-section-footer">
          <Link to="/research" className="research-view-all">
            <span>View all research</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ResearchPreview;