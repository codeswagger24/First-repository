import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './index.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "container"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main>
      <About />
      <Skills />
      <Education />
      <Contact />
      </main>
    </div>
  );
}

export default App;