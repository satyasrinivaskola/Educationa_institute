import React from "react";
import "./About.css"
import image from './im.webp'
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

          <h3>Who We Are</h3>

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
            src={image}
            alt="college"
          />
        </div>

      </section>

      {/* VISION & MISSION */}

      <section className="vision-section">

        <div className="vision-card">
          <h3>Our Vision</h3>

          <p>
            To become a globally recognized institution
            delivering excellence in education and innovation.
          </p>
        </div>

        <div className="vision-card">
          <h3>Our Mission</h3>

          <p>
            To empower students with knowledge, skills,
            leadership, and career opportunities.
          </p>
        </div>

      </section>

      {/* HIGHLIGHTS */}

      <section className="highlights-section">

        <h3>Why Choose Us</h3>

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
          <h3>5000+</h3>
          <p>Students</p>
        </div>

        <div className="achievement-box">
          <h3>100+</h3>
          <p>Faculty Members</p>
        </div>

        <div className="achievement-box">
          <h3>250+</h3>
          <p>Recruiting Companies</p>
        </div>

        <div className="achievement-box">
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h1>Start Your Academic Journey Today</h1>

        <p>
          Admissions are open for the academic year 2026.
        </p>

        <button>Apply Now</button>

      </section>

    </div>
  );
}

export default About;