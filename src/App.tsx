import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import MatrixBackground from "./MatrixBackground";

function App() {
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