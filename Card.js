import React from "react";
import { createRoot } from "react-dom/client";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={image8} className="card-image" alt="" />
      <div className="card--stats">
        <img src={image9} alt="image9" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6)'</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons width katis zaferes</p>
          <p><span className="bold">From $136 </span>/ person</p>
    </div>
    );
}
