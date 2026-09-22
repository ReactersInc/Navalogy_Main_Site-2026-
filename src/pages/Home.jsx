import Hero from "../components/home/Hero";
import ResearchPreview from "../components/home/ResearchPreview";
import FeaturedResearch from "../components/home/FeaturedResearch";
import PeoplePreview from "../components/home/PeoplePreview";

function Home() {
  return (
    <>
      <Hero />
      <ResearchPreview />
      <FeaturedResearch />
      <PeoplePreview />
    </>
  );
}

export default Home;