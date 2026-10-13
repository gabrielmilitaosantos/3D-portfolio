import Hero from './sections/Hero';
import Showcase from './sections/Showcase.tsx';
import NavBar from './components/NavBar.tsx';
import FeatureCards from './sections/FeatureCards.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <FeatureCards />
    </>
  );
};
export default App;
