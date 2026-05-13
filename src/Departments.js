import React from "react";
import './Departments.css'
function Departments() {

  const departments = [
    {
      title: "Computer Science Engineering",
      desc: "AI, Web Development, Cloud Computing & Software Engineering.",
      icon: "💻",
    },
    {
      title: "Mechanical Engineering",
      desc: "Robotics, Manufacturing & Machine Design.",
      icon: "⚙️",
    },
    {
      title: "Civil Engineering",
      desc: "Construction, Infrastructure & Smart City Development.",
      icon: "🏗️",
    },
    {
      title: "Electronics & Communication",
      desc: "Embedded Systems, IoT & Communication Technologies.",
      icon: "📡",
    },
    {
      title: "Business Administration",
      desc: "Marketing, Finance & Entrepreneurship Skills.",
      icon: "📈",
    },
    {
      title: "Artificial Intelligence",
      desc: "Machine Learning, Data Science & AI Solutions.",
      icon: "🤖",
    },
  ];

  return (
    <div className="departments-page">

      {/* HERO */}

      <section className="department-hero">

        <h1>Explore Our Departments</h1>

        <p>
          Discover industry-focused programs designed to build
          future innovators, leaders, and professionals.
        </p>

      </section>

      {/* DEPARTMENTS */}

      <section className="department-section">

        <h3>Academic Departments</h3>

        <div className="department-grid">

          {departments.map((dept, index) => (

            <div className="department-card" key={index}>

              <div className="department-icon">
                {dept.icon}
              </div>

              <h3>{dept.title}</h3>

              <p>{dept.desc}</p>

              <button>View Details</button>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}

      <section className="department-features">

        <h3>Why Our Departments Stand Out</h3>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Modern Labs</h3>
            <p>
              Industry-standard labs with advanced technology.
            </p>
          </div>

          <div className="feature-card">
            <h3>Expert Faculty</h3>
            <p>
              Highly qualified professors and industry mentors.
            </p>
          </div>

          <div className="feature-card">
            <h3>Research Opportunities</h3>
            <p>
              Innovation-driven projects and startup support.
            </p>
          </div>

          <div className="feature-card">
            <h3>Career Support</h3>
            <p>
              Internships, training, and placement guidance.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="department-stats">

        <div className="dept-stat-box">
          <h3>15+</h3>
          <p>Departments</p>
        </div>

        <div className="dept-stat-box">
          <h3>100+</h3>
          <p>Faculty Members</p>
        </div>

        <div className="dept-stat-box">
          <h3>50+</h3>
          <p>Research Labs</p>
        </div>

        <div className="dept-stat-box">
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>

      </section>

      {/* CTA */}

      <section className="department-cta">

        <h3>Build Your Career With Us</h3>

        <p>
          Choose the right department and shape your future.
        </p>

        <button>Apply For Admission</button>

      </section>

    </div>
  );
}

export default Departments;