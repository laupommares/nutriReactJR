import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import StatsSection from "./components/StatsSection";


function App() {
  return (
    <div className="bg-white font-serif">
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutMe />
      <Programs />
      <div className="h-6 w-full bg-green"></div>
    </div>
  );
}

export default App;
