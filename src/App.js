

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <Skills />
      <Experience />
      <Portfolio/>
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
