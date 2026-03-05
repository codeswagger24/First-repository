import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    {
      title: "Web Development",
      subSkills: [
        {
          title: "Frontend",
          subSkills: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "Backend",
          subSkills: []
        }
      ]
    }
  ];

  const education = [
    {
      year: "2021",
      program: "Junior High School",
      school: "MOGCHS"
    },
    {
      year: "2024",
      program: "Senior High School",
      school: "PHINMA - COC"
    },
    {
      year: "2028",
      program: "BS Information Technology",
      school: "USTP - University of Science And Technology of Southern Philippines"
    },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <Header />

      <div className="button-wrapper" style={{ marginBottom: "10px" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-button"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <main>
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact />
      </main>
    </div>
  );
}

export default App;