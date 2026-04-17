import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import MatrixBackground from "./MatrixBackground";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  
  return (
    <div className="relative bg-black/30 min-dvh-screen">
      <MatrixBackground />
      <Header />
      <AboutMe />
      <Project />
      <Contact />
    </div>
  )
}

export default App;