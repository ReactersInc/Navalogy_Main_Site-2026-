import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import publications from "../data/publications.json";

function Publications() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "IoMT & Healthcare",
    "SDN Security",
    "Blockchain / DLT",
    "Energy Optimization"
  ];

  const filteredPublications = useMemo(() => {
    if (activeFilter === "All") {
      return publications;
    }

    return publications.filter((publication) => {
      if (activeFilter === "IoMT & Healthcare") {
        return publication.researchAreas.includes("iomt");
      }

      if (activeFilter === "SDN Security") {
        return publication.researchAreas.includes("sdn-security");
      }

      if (activeFilter === "Blockchain / DLT") {
        return publication.researchAreas.includes("blockchain");
      }

      if (activeFilter === "Energy Optimization") {
        return publication.researchAreas.includes("energy");
      }

      return true;
    });
  }, [activeFilter]);

  return (
    <div className="publications-page">
      <section className="publications-hero">
        <div className="container">
          <div className="section-label">
            Research Repository
          </div>

          <div className="publications-hero-grid">
            <h1 className="publications-title">
              Published
              <br />
              works & artifacts.
            </h1>

            <div className="publications-intro">
              <p>
                Research outputs spanning intelligent healthcare,
                software-defined network security, distributed trust,
                and energy-aware edge systems.
              </p>

              <div className="publications-count">
                <span>Published works</span>
                <strong>
                  {String(publications.length).padStart(2, "0")}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="publications-content">
        <div className="container">

          <div className="publication-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`publication-filter ${
                  activeFilter === filter
                    ? "publication-filter-active"
                    : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="publication-list">
            {filteredPublications.map((publication, index) => (
              <article
                key={publication.id}
                className="publication-card"
              >
                <div className="publication-card-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="publication-card-main">

                  <div className="publication-meta">
                    <span>{publication.year}</span>

                    <span>
                      {publication.venue}
                    </span>

                    {publication.volume && (
                      <span>
                        {publication.volume}
                      </span>
                    )}
                  </div>

                  <h2 className="publication-title">
                    {publication.title}
                  </h2>

                  <p className="publication-authors">
                    {publication.authors.join(", ")}
                  </p>

                  <p className="publication-description">
                    {publication.description}
                  </p>

                  <div className="publication-footer">
                    <span className="publication-category">
                      {publication.category}
                    </span>

                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link"
                    >
                      <span>View Core Artifact</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="publications-empty">
              No publications found for this research domain.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default Publications;