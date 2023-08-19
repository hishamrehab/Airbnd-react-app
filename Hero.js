import React from "react";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg"
export default function Hero() {
  return (
    <section className="hero">
      <img src={image3} alt="image3" className="hero-photo" />
      <img src={image4} alt="image3=" className="hero-photo" />
      <img src={image5} alt="image3" className="hero-photo" />
      <img src={image6} alt="image3" className="hero-photo" />
      <img src={image7} width="200px" className="hero-photo" />
      <div>
        <h1 className="hero--header">Online Experiences</h1>
      </div>
      <p className="hero--text">
        What is a paragraph? Paragraphs are the building blocks of papers. Many
        students define paragraphs in terms of length:<br/> a paragraph is a group of
        at least five sentences, a paragraph is half a page long, etc. In<br/>
        reality, though, the unity and coherence of ideas among sentences is<br/>
        what constitutes a paragraph home.
      </p>
    </section>
  );
}
