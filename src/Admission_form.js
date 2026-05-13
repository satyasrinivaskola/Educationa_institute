import React, { useState } from "react";
import "./AdmissionForm.css";

function AdmissionForm() {

  const [transport, setTransport] = useState("local");

  const firstYearFee = 13000;
  const secondYearFee = 14000;

  const transportFee =
    transport === "bus" ? 12000 : 0;

  const totalFee =
    firstYearFee + secondYearFee + transportFee;

  return (

    <div className="admission-container">

      <form className="admission-form">

        {/* ROW 1 */}

        <input
          type="text"
          placeholder="Full Name (as per 10th Marks List)"
        />

        <select>
          <option>M.P.C</option>
          <option>Bi.P.C</option>
          <option>C.E.C</option>
          <option>M.E.C</option>
        </select>

        <input
          type="text"
          placeholder="Student Phone Number"
        />


        {/* ROW 2 */}

        <input
          type="text"
          placeholder="Parent Phone Number"
        />

        <textarea
          placeholder="Address"
        ></textarea>

        <input
          type="email"
          placeholder="Email (Optional)"
        />


        {/* ROW 3 */}

        <select
          onChange={(e) =>
            setTransport(e.target.value)
          }
        >
          <option value="local">
            Own Transport / Local
          </option>

          <option value="bus">
            College Bus
          </option>
        </select>

        <select>
          <option>
            Extracurricular: None
          </option>

          <option>Sports</option>
          <option>NCC</option>
          <option>Cultural Activities</option>
        </select>

      </form>


      {/* FEE BOX */}

      <div className="fee-box">

        <p>
          1st Year College Fee:
          <strong> ₹13,000</strong>
        </p>

        <p>
          2nd Year College Fee:
          <strong> ₹14,000</strong>
        </p>

        <p>
          Transport Fee:
          <strong> ₹{transportFee}</strong>
        </p>

        <h1>
          Total Fee Payable:
          ₹{totalFee}
        </h1>

      </div>


      {/* BUTTON */}

      <button className="submit-btn">
        SUBMIT APPLICATION
      </button>

    </div>
  );
}

export default AdmissionForm;