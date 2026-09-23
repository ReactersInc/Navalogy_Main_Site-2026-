import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import people from "../../data/people.json";
import PeopleGrid from "../people/PeopleGrid";

function PeoplePreview() {
  const visiblePeople = people.filter(
    (person) => person.enabled !== false
  );

  const featuredPeople = visiblePeople.filter(
    (person) => person.membership === "lead"
  );

  const currentMembers = visiblePeople.filter(
    (person) => person.membership === "current"
  );

  const pastMembers = visiblePeople.filter(
    (person) =>
      person.membership === "past" &&
      person.passingYear !== null &&
      person.passingYear !== undefined
  );

  const passingYears = useMemo(() => {
    return [...new Set(pastMembers.map((person) => person.passingYear))]
      .sort((a, b) => b - a);
  }, [pastMembers]);

  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    if (!selectedYear) return;

    const element = document.getElementById(
      "past-members-results"
    );

    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }, [selectedYear]);

  const selectedPastMembers = selectedYear
    ? pastMembers.filter(
        (person) => person.passingYear === selectedYear
      )
    : [];

  return (
    <section className="people-preview-section">
      <div className="container">

        {/* Section Header */}
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
              Researchers and engineers working across the
              systems, security, and infrastructure that
              define Navalogy.
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

        {/* Lead Researcher */}
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

        {/* Current Members */}
        {currentMembers.length > 0 && (
          <div className="research-members">
            <div className="research-members-header">
              <div className="section-label">
                Current Student Members
              </div>
            </div>

            <PeopleGrid people={currentMembers} />
          </div>
        )}

        {/* Past Members */}
        {passingYears.length > 0 && (
          <div className="research-members past-members">

            <div className="research-members-header">
              <div>
                <div className="section-label">
                  Past Student Members
                </div>

                <p className="past-members-intro">
                  Alumni and former members of the Navalogy
                  research collective, organized by year.
                </p>
              </div>
            </div>

            {/* Passing Years */}
            <div className="past-member-years">
              {passingYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  className={`past-member-year ${
                    selectedYear === year
                      ? "past-member-year-active"
                      : ""
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  <span>{year}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>

            {/* Selected Year */}
            {selectedYear && (
              <div
                id="past-members-results"
                className="past-members-results"
              >
                <div className="past-members-results-header">
                  <div>
                    <div className="section-label">
                      Graduated / Completed
                    </div>

                    <h3>{selectedYear}</h3>
                  </div>

                  <button
                    type="button"
                    className="past-members-back"
                    onClick={() => setSelectedYear(null)}
                  >
                    Back to years
                  </button>
                </div>

                <PeopleGrid people={selectedPastMembers} />
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default PeoplePreview;