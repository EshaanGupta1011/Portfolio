import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./index.css";
import About from "./Components/About/About";
import Mywork from "./Components/Mywork/Mywork";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import Achievement from "./Components/Achievements/Achievement";
import Experience from "./Components/Experiences/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Achievement />
      <Experience />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
