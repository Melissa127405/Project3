import React from 'react'
import ladywdoodle from './assets/ladywdoodle.jpg';



export default function Homepage() {
  return (
    <div className="Homepage-title">
      <h1>Welcome to Doodle Groom!</h1>
      <p>
        We hope to give you and your Doodle all the variaty and style you could possiably imagine.
      </p>

    <img
      src={ladywdoodle} 
        alt="Lady with Doodle" 
        style={{ width: "300px", borderRadius: "10px", marginTop: "1rem" }}
      />
    </div>
      );
}


