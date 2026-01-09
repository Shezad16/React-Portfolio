export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Hii, I'm <span>Shezad</span>
          </h1>

          <h2>React Developer & Frontend Engineer</h2>

          <p>
            I design and build modern, responsive, and high-performance web
            applications using <strong>React 19</strong>, JavaScript, and
            clean UI principles. I focus on creating engaging user experiences
            with scalable and maintainable code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-image">
          <img
            src="img1.jpeg"
            alt="Shezad Profile"
          />
        </div>
      </div>
    </section>
  );
}
