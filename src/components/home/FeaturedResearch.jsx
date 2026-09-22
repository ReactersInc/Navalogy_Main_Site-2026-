import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import publications from "../../data/publications.json";

function FeaturedResearch() {
  const featuredPublications = publications
    .filter((publication) => publication.featured)
    .sort((a, b) => b.year - a.year);

  return (
    <section className="featured-research-section">
      <div className="container">
        <div className="featured-research-header">
          <div>
            <div className="section-label">
              Selected Research
            </div>

            <h2 className="featured-research-title">
              Research in
              <br />
              publication.
            </h2>
          </div>

          <Link
            to="/publications"
            className="featured-research-header-link"
          >
            <span>Research repository</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="featured-research-list">
          {featuredPublications.map((publication, index) => (
            <article
              key={publication.id}
              className="featured-publication"
            >
              <div className="featured-publication-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="featured-publication-main">
                <div className="featured-publication-meta">
                  <span>{publication.year}</span>
                  <span>{publication.venue}</span>
                  <span>{publication.category}</span>
                </div>

                <h3 className="featured-publication-title">
                  {publication.title}
                </h3>

                <p className="featured-publication-description">
                  {publication.description}
                </p>

                <div className="featured-publication-authors">
                  {publication.authors.join(" · ")}
                </div>
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noreferrer"
                className="featured-publication-link"
                aria-label={`Read ${publication.title}`}
              >
                <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedResearch;