export default function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>

      <p className="about-text">
        I am a dedicated <strong>React Developer</strong> with a strong passion
        for building modern, scalable, and user-friendly web applications.
        I specialize in developing responsive interfaces using
        <strong> React 19</strong>, <strong>JavaScript (ES6+)</strong>,
        <strong> HTML5</strong>, and <strong>CSS3</strong>.
      </p>

      <p className="about-text">
        I enjoy transforming complex problems into simple, intuitive solutions.
        My focus is on clean code, performance optimization, accessibility,
        and delivering seamless user experiences across all devices.
      </p>

      <p className="about-text">
        I am continuously learning new technologies and best practices to stay
        up to date with modern frontend development trends and tools.
      </p>

      <div className="about-buttons">
        <a
          href="Shezad Rayeen Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn outline"
        >
          View Resume
        </a>

        <a
          href="Shezad Rayeen Resume.pdf"
          download
          className="btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
