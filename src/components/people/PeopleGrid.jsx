import peopleData from "../../data/people.json";
import PersonCard from "./PersonCard";

function PeopleGrid({ people = peopleData }) {
  return (
    <div className="people-grid">
      {people.map((person) => (
        <PersonCard
          key={person.id}
          person={person}
        />
      ))}
    </div>
  );
}

export default PeopleGrid;