import "./App.css";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <div>
      <div>
        <Banner />
        <Skills />
        <Projects />
        <About />
      </div>
      <div className="hidden md:inline">
        <Navigation />
      </div>
      <div className="inline md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;
