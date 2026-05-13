import React from "react";
import './DepartmentCard.css'
function DepartmentCard({ title, desc }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{desc}</p>

      <button>View Details</button>
    </div>
  );
}

export default DepartmentCard;