import React from "react";

function Admissions() {
  return (
    <div className="admission-page">

      {/* Hero Section */}
      <section className="admission-hero">
        <h1>Admissions Open 2026</h1>

        <p>
          Start your journey with Global College and build
          your successful future.
        </p>

        <button  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScFy5xE5OCTZNlX1JSz-Hcflry6yotk44fE7zsjD_bwsTCAtw/viewform",
      "_blank"
    )}>Apply Online</button>
      </section>

      {/* Admission Process */}
      <section className="admission-process">

        <h2>Admission Process</h2>

        <div className="process-container">

          <div className="process-card">
            <h3>1. Register</h3>
            <p>Create your admission account online.</p>
          </div>

          <div className="process-card">
            <h3>2. Submit Documents</h3>
            <p>Upload required certificates and details.</p>
          </div>

          <div className="process-card">
            <h3>3. Pay Fee</h3>
            <p>Complete application payment securely.</p>
          </div>

          <div className="process-card">
            <h3>4. Confirmation</h3>
            <p>Receive admission confirmation by email.</p>
          </div>

        </div>
      </section>

      {/* Courses */}
      <section className="courses-section">

        <h2>Available Courses</h2>

        <div className="course-grid">

          <div className="course-box">
            <h3>B.Tech</h3>
            <p>Computer Science, AI, Data Science</p>
          </div>

          <div className="course-box">
            <h3>BCA</h3>
            <p>Software Development & Programming</p>
          </div>

          <div className="course-box">
            <h3>BBA</h3>
            <p>Business Management & Marketing</p>
          </div>

          <div className="course-box">
            <h3>MCA</h3>
            <p>Advanced Computer Applications</p>
          </div>

        </div>
      </section>

      {/* Eligibility */}
      <section className="eligibility-section">

        <h2>Eligibility Criteria</h2>

        <div className="eligibility-box">
          <p>✔ Intermediate / 12th Pass</p>
          <p>✔ Minimum 50% Marks</p>
          <p>✔ Valid Entrance Exam Score</p>
          <p>✔ Required Documents Submission</p>
        </div>

      </section>

      {/* CTA */}
      <section className="admission-cta">

        <h2>Ready To Join?</h2>

        <p>
          Admissions are open for the academic year 2026.
        </p>

<button
  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScFy5xE5OCTZNlX1JSz-Hcflry6yotk44fE7zsjD_bwsTCAtw/viewform",
      "_blank"
    )
  }>Applys online</button>
      </section>

    </div>
  );
}

export default Admissions;