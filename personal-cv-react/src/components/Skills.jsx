import { useState } from "react";

function Skills({ skills }) {
  const [showSkills, setShowSkills] = useState(true);

  const renderSkills = (skillsList) => (
    <ul>
      {skillsList.map((skill, index) => {
        if (typeof skill === "string") {
          return <li key={index}>{skill}</li>;
        }
        if (skill.title) {
          return (
            <li key={index}>
              {skill.title}
              {skill.subSkills && skill.subSkills.length > 0 && renderSkills(skill.subSkills)}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Button sits outside the card */}
      <button
        onClick={() => setShowSkills(!showSkills)}
        className="toggle-button"
        style={{ marginBottom: "10px" }} // spacing between button and card
      >
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      {showSkills && (
        <section className="card">
          <h2>Skills</h2>
          {renderSkills(skills)}
        </section>
      )}
    </div>
  );
}

export default Skills;