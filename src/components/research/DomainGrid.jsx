import research from "../../data/research.json";
import DomainCard from "./DomainCard";

function DomainGrid() {
  return (
    <div className="domain-grid">
      {research.map((domain) => (
        <DomainCard key={domain.id} domain={domain} />
      ))}
    </div>
  );
}

export default DomainGrid;