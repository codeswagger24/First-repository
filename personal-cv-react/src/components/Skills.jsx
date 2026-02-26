function Skills() {
    return (
<section className="card">
      <button id="toggleSkills">Show/Hide Skills</button>
      <section className="card" id="skillsSection">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          <li>Web Development
            <ul>
              <li>Frontend
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
    </section>
    );
  }
  
  export default Skills;