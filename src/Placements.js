import React from "react";

function Placements() {

  const companies = [
    "Infosys",
    "TCS",
    "Wipro",
    "Accenture",
    "Cognizant",
    "Capgemini",
  ];

  return (
    <div className="placements-page">

      {/* HERO */}

      <section className="placement-hero">

        <h1>100% Placement Assistance</h1>

        <p>
          Empowering students with career opportunities,
          internships, and industry-ready skills.
        </p>

        <button>Apply For Admissions</button>

      </section>

      {/* STATS */}

      <section className="placement-stats">

        <div className="stat-box">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>

        <div className="stat-box">
          <h2>250+</h2>
          <p>Hiring Companies</p>
        </div>

        <div className="stat-box">
          <h2>₹12 LPA</h2>
          <p>Highest Package</p>
        </div>

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Students Placed</p>
        </div>

      </section>

      {/* TOP RECRUITERS */}

      <section className="recruiters-section">

        <h2>Top Recruiters</h2>

        <div className="company-grid">

          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <h3>{company}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* BENEFITS */}

      <section className="placement-benefits">

        <h2>Why Students Choose Us</h2>

        <div className="benefit-container">

          <div className="benefit-card">
            <h3>Industry Training</h3>
            <p>
              Real-time project experience with experts.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Mock Interviews</h3>
            <p>
              Practice sessions for technical & HR rounds.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Resume Building</h3>
            <p>
              Professional resume & LinkedIn optimization.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Internships</h3>
            <p>
              Internship opportunities with partner companies.
            </p>
          </div>

        </div>

      </section>

      {/* SUCCESS STORIES */}

      <section className="success-section">

        <h2>Student Success Stories</h2>

        <div className="success-grid">

          <div className="success-card">
            <h3>Rahul Kumar</h3>
            <p>Placed at Infosys</p>
            <span>Package: ₹6 LPA</span>
          </div>

          <div className="success-card">
            <h3>Priya Sharma</h3>
            <p>Placed at TCS</p>
            <span>Package: ₹5.5 LPA</span>
          </div>

          <div className="success-card">
            <h3>Arjun Reddy</h3>
            <p>Placed at Accenture</p>
            <span>Package: ₹7 LPA</span>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="placement-cta">

        <h2>Your Dream Career Starts Here</h2>

        <p>
          Join Global College and unlock top placement opportunities.
        </p>

        <button>Join Now</button>

      </section>

    </div>
  );
}

export default Placements;