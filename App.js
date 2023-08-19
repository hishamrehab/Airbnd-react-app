import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Test from "./component/Test";
import Image10 from "./component/images/image10.jpg";
import Image11 from "./component/images/image11.jpg";
import Image12 from "./component/images/image12.jpg";
import Image13 from "./component/images/image11.jpg";
import Image14 from "./component/images/image12.jpg";
import Image15 from "./component/images/image13.jpg";
import Contact from "./component/Contact";
function App() {
  return (
    <div className="contacts">
      <Navbar />
      <Hero />
      <Contact
        img={Image10}
        name="Eng.hishamrehab"
        phone="01211463479"
        email="hishamrehab@gmail.com"
      />
      <Contact
        img={Image11}
        name="Eng.mohamed emad"
        phone="015557858"
        email="mohamed emad@gmail.com"
      />
      <Contact
        img={Image12}
        name="Mr.hossam"
        phone="012454848611"
        email="hossam@gmail.com"
      />
      <Contact
        img={Image13}
        name="ahmed"
        phone="012445897"
        email="ahmed@gmail.com"
      />
      <Contact
        img={Image14}
        name="karim"
        phone="01224924284"
        email="karim@gmail.com"
      />
      <Contact
        img={Image15}
        name="Ahmed rehab"
        phone="012445897"
        email="ahmed@gmail.com"
      />
      <Contact
        img={Image10}
        name="Mahmoud Ahmed "
        phone="012445897"
        email="ahmed@gmail.com"
      />
      <Contact
        img={Image12}
        name="abd elrahman"
        phone="012445897"
        email="ahmed@gmail.com"
      />
    </div>
  );
}

export default App;
