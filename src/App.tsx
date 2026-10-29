import Hero from './sections/Hero';
import Showcase from './sections/Showcase.tsx';
import NavBar from './components/NavBar.tsx';
import FeatureCards from './sections/FeatureCards.tsx';
import Experience from './sections/Experience.tsx';
import Skills from './sections/Skills.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <Experience />
      <Skills />
    </>
  );
};
export default App;
