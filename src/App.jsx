import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <div className="bg-white font-serif">
      <Navbar />
      <Hero />
      <Programs />
      <AboutMe />
      <div className="h-6 w-full bg-green"></div>
      <Footer />
    </div>
  );
}

export default App;
