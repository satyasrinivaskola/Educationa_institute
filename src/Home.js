import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
function Home() {
const navigate = useNavigate();
  return (
    <div>
   
      <section className="hero">
        <h1>Welcome To Global College</h1>

        <p>
          Excellence In Education, Innovation & Research
        </p>

      <button onClick={() => navigate("/admissions")}>
   Apply Now
</button>
      </section>

      <section className="info-section">

        <div className="info-box">
          <h3>5000+</h3>
          <p>Students</p>
        </div>

        <div className="info-box">
          <h3>100+</h3>
          <p>Faculty Members</p>
        </div>

        <div className="info-box">
          <h3>95%</h3>
          <p>Placements</p>
        </div>

      </section>
    </div>
  );
}

export default Home;