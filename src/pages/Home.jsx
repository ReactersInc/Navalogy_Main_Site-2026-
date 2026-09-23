import Hero from "../components/home/Hero";
import ResearchPreview from "../components/home/ResearchPreview";
import FeaturedResearch from "../components/home/FeaturedResearch";
import ProjectsPreview from "../components/home/ProjectsPreview";
import PeoplePreview from "../components/home/PeoplePreview";

function Home() {
  return (
    <>
      <Hero />
      <ResearchPreview />
      <FeaturedResearch />
      <ProjectsPreview />
      <PeoplePreview />
    </>
  );
}

export default Home;