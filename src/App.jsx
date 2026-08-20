import React from "react";

const App = () => {
  return (
    <div className="container">
      <nav>
        <a className="logo" href="#">
          Abdullah Gumi
        </a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" style={{ border: 0 }}>
          <div className="eyebrow">
            Senior Full-Stack Software Engineer · Founder
          </div>
          <h1>I build software people actually use.</h1>
          <p>
            8+ years building web and mobile products. Founder &amp; CEO of KEKE
            GO, a ride-hailing platform serving 15,000+ users.
          </p>
          <a className="button" href="#contact">
            Get in touch
          </a>
        </section>

        <section id="about">
          <h2>About</h2>
          <p className="about">
            I'm a software engineer focused on building reliable products from
            idea to production. I work across frontend, backend, mobile, real-time
            systems, payments, databases, and infrastructure.
          </p>
          <div className="stats">
            <div className="stat">
              <strong>8+</strong>
              <span>Years experience</span>
            </div>
            <div className="stat">
              <strong>15K+</strong>
              <span>KEKE GO users</span>
            </div>
            <div className="stat">
              <strong>6K+</strong>
              <span>Completed rides</span>
            </div>
          </div>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          <div className="project">
            <div>
              <h3>KEKE GO</h3>
              <p>
                Ride-hailing platform for tricycles. Built the mobile apps,
                backend, real-time tracking, payments, databases, APIs, and
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Stack</h2>
          <div className="tech">
            <span>React</span>
            <span>Next.js</span>
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>Prisma</span>
            <span>Socket.IO</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>Git</span>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <h3>Have a project in mind?</h3>
          <p style={{ marginBottom: "20px" }}>
            I'm always interested in building useful products and solving
            interesting engineering problems.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a className="button" href="mailto:abdulgumi77@gmail.com">
              Email me
            </a>
            <a
              className="button"
              style={{
                background: "#fff",
                color: "#171717",
                border: "1px solid #ddd",
              }}
              href="https://github.com/AbdullahGumi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="button"
              style={{
                background: "#fff",
                color: "#171717",
                border: "1px solid #ddd",
              }}
              href="https://www.linkedin.com/in/abdullah-ahmad-b0b4b4115/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Abdullah Gumi</footer>
    </div>
  );
};

export default App;

