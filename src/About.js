import React from "react";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <h1>About Global College</h1>

        <p>
          Building future leaders through quality education,
          innovation, and career excellence.
        </p>

      </section>

      {/* ABOUT CONTENT */}

      <section className="about-content">

        <div className="about-left">

          <h2>Who We Are</h2>

          <p>
            Global College is one of the leading educational
            institutions dedicated to providing world-class
            education with modern infrastructure and highly
            experienced faculty.
          </p>

          <p>
            We focus on practical learning, innovation,
            research, and career development to prepare
            students for global opportunities.
          </p>

          <button>Explore Courses</button>

        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="college"
          />
        </div>

      </section>

      {/* VISION & MISSION */}

      <section className="vision-section">

        <div className="vision-card">
          <h2>Our Vision</h2>

          <p>
            To become a globally recognized institution
            delivering excellence in education and innovation.
          </p>
        </div>

        <div className="vision-card">
          <h2>Our Mission</h2>

          <p>
            To empower students with knowledge, skills,
            leadership, and career opportunities.
          </p>
        </div>

      </section>

      {/* HIGHLIGHTS */}

      <section className="highlights-section">

        <h2>Why Choose Us</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <h3>Modern Campus</h3>
            <p>Smart classrooms and advanced labs.</p>
          </div>

          <div className="highlight-card">
            <h3>Experienced Faculty</h3>
            <p>Industry experts and professional mentors.</p>
          </div>

          <div className="highlight-card">
            <h3>Placements</h3>
            <p>Top company placement opportunities.</p>
          </div>

          <div className="highlight-card">
            <h3>Research & Innovation</h3>
            <p>Encouraging startups and student projects.</p>
          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="achievement-section">

        <div className="achievement-box">
          <h2>5000+</h2>
          <p>Students</p>
        </div>

        <div className="achievement-box">
          <h2>100+</h2>
          <p>Faculty Members</p>
        </div>

        <div className="achievement-box">
          <h2>250+</h2>
          <p>Recruiting Companies</p>
        </div>

        <div className="achievement-box">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Start Your Academic Journey Today</h2>

        <p>
          Admissions are open for the academic year 2026.
        </p>

        <button>Apply Now</button>

      </section>

    </div>
  );
}

export default About;