export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <a href="https://shezad16.github.io/Frontend---Project/" target="_blank"><h3>Payment Website</h3></a>
          <p>Payment gateway clone app built with Html,CSS and Javascript</p>
        </div>

        <div className="project-card">
          <a href="" target="_blank"><h3>E-Commerce App</h3></a>
          <p>Shopping app using Html and CSS.</p>
        </div>

        <div className="project-card">
          <h3>Dashboard</h3>
          <p>Admin dashboard with charts and routing.</p>
        </div>
      </div>
    </section>
  );
}
