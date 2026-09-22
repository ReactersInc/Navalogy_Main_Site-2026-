import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import people from "../../data/people.json";
import PeopleGrid from "../people/PeopleGrid";

function PeoplePreview() {
  const featuredPeople = people.filter((person) => person.featured);
  const researchMembers = people.filter((person) => !person.featured);

  if (people.length === 0) {
    return null;
  }

  return (
    <section className="people-preview-section">
      <div className="container">

        {/* Section heading */}
        <div className="people-preview-header">
          <div className="people-preview-heading">
            <div className="section-label">
              The Collective
            </div>

            <h2 className="people-preview-title">
              People behind
              <br />
              the work.
            </h2>
          </div>

          <div className="people-preview-intro">
            <p>
              Researchers and engineers working across the systems,
              security, and infrastructure that define Navalogy.
            </p>

            <Link
              to="/people"
              className="people-preview-link"
            >
              <span>Meet the collective</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>


        {/* Featured lead */}
        {featuredPeople.length > 0 && (
          <div id="people" className="featured-person">
            {featuredPeople.map((person) => (
              <article
                key={person.id}
                className="featured-person-card"
              >
                <div className="featured-person-image">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />
                </div>

                <div className="featured-person-content">
                  <div className="featured-person-label">
                    {person.category}
                  </div>

                  <h3 className="featured-person-name">
                    {person.name}
                  </h3>

                  <p className="featured-person-role">
                    {person.role}
                  </p>

                  {person.bio && (
                    <p className="featured-person-bio">
                      {person.bio}
                    </p>
                  )}

                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-person-link"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Student / research members */}
        {researchMembers.length > 0 && (
          <div className="research-members">
            <div className="research-members-header">
              <div className="section-label">
                Research Members
              </div>
            </div>

            <PeopleGrid people={researchMembers} />
          </div>
        )}

      </div>
    </section>
  );
}

export default PeoplePreview;