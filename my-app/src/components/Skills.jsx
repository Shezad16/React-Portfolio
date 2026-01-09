export default function Skills() {
  const skills = [
    "React 19",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
