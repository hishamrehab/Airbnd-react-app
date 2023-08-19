import React from "react";
import { createRoot } from "react-dom/client";
import image from "./images/image2.png";
export default function Navbar() {
  return (
    <nav>
      <img src={image} alt="image" className="nav--logo" />
    </nav>
  );
}
