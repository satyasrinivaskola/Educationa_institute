import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
 const [showMenu, setShowMenu] = useState(false);
 const closeMenu=()=>{
 setShowMenu(false)
 }
  return (
  
      
      <div className="top-bar navbar">
    
      <h2>Global College</h2>
  <div
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </div>
     
        
 <div className={`sidebar ${showMenu ? "active" : ""}`}>
   <nav className="navbar">
      <ul className="nav-icon">
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/admissions" onClick={closeMenu}>Admissions</Link></li>
        <li><Link to="/departments" onClick={closeMenu}>Departments</Link></li>
        <li><Link to="/placements" onClick={closeMenu}>Placements</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
    </div>
   </div>
 
  );
}

export default Navbar;