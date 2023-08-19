import React from "react";
import { createRoot } from "react-dom/client";
import Image10 from "./images/image10.jpg";
import Image11 from "./images/image11.jpg";
import Image12 from "./images/image12.jpg";
import Image13 from "./images/image13.jpg";
import Image14 from "./images/image14.png";
import Image15 from "./images/image15.png";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="image" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={Image15} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={Image14} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

// const person = {
//   img: "./images/image11.jpg",
//   name: "Mr. Wiskerson",
//   phone: "(800) 555-1234",
//   email: "mr.whiskaz@catnap.meow",
// };

// const { img, name } = person;
// console.log(name);
