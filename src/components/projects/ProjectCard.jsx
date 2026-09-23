import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card-index">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="project-card-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.type}</span>
        </div>

        <h3 className="project-card-title">
          {project.title}
        </h3>

        <p className="project-card-description">
          {project.shortDescription}
        </p>

        <Link
          to={`/projects/${project.id}`}
          className="project-card-link"
        >
          <span>Explore project</span>
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;