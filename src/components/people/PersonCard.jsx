import { ArrowUpRight } from "lucide-react";

function PersonCard({ person }) {
  return (
    <article className="person-card">
      <div className="person-card-image">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
          />
        ) : (
          <div className="person-card-placeholder">
            <span>{person.name?.charAt(0) || "N"}</span>
          </div>
        )}
      </div>

      <div className="person-card-content">
        <div>
          <h3 className="person-card-name">
            {person.name}
          </h3>

          <p className="person-card-role">
            {person.role}
          </p>
        </div>

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="person-card-linkedin"
            aria-label={`Open ${person.name}'s LinkedIn`}
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </article>
  );
}

export default PersonCard;