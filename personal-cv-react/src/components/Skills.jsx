import { useState } from "react";

function Skills() {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <section className="card">
      <button onClick={() => setShowSkills(!showSkills)}>
        Show/Hide Skills
      </button>

      {showSkills && (
        <section className="card">
          <h2>Skills</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <ul>
            <li>
              Web Development
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;