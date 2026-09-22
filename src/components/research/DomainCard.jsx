import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function DomainCard({ domain }) {
  return (
    <article className="domain-card card">
      <div className="domain-card-top">
        <span className="domain-card-number">{domain.number}</span>

        <span className="domain-card-arrow">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="domain-card-content">
        <h3 className="domain-card-title">{domain.title}</h3>

        <p className="domain-card-description">
          {domain.description}
        </p>
      </div>

      <div className="domain-card-footer">
        <div className="domain-card-tags">
          {domain.tags.map((tag) => (
            <span key={tag} className="domain-card-tag">
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/research#${domain.id}`}
          className="domain-card-link"
          aria-label={`Explore ${domain.title}`}
        >
          Explore
        </Link>
      </div>
    </article>
  );
}

export default DomainCard;