import HeroSection from "../components/hero-section/HeroSection";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/skills-section/Skills";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
    </>
  );
};
export default Home;
