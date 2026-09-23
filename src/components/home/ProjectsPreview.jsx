import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json";
import ProjectCard from "../projects/ProjectCard";

function ProjectsPreview() {
  const visibleProjects = projects.filter(
    (project) => project.enabled !== false
  );

  const featuredProjects = visibleProjects.filter(
    (project) => project.featured
  );

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="projects-preview-section">
      <div className="container">

        {/* Section Header */}
        <div className="projects-preview-header">
          <div>
            <div className="section-label">
              Selected Work
            </div>

            <h2 className="projects-preview-title">
              Engineering
              <br />
              in practice.
            </h2>
          </div>

          <div className="projects-preview-intro">
            <p>
              Applied systems, prototypes, and engineering
              projects developed across the Navalogy ecosystem.
            </p>

            <Link
              to="/projects"
              className="projects-preview-link"
            >
              <span>View all projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div
          id="projects"
          className="projects-preview-list"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsPreview;