import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I am <span  style={{fontSize: '2em'}}>👋</span></h5>
        <h1 className="gradient-text">Moyosore Weke</h1>
        <ReactTyped
          strings={[
            "Skilled Frontend Developer who creates Contemporary Web  Interfaces",
            "Skilled Frontend Developer who creates Contemporary Mobile Interfaces",
          ]}
          typeSpeed={50}
          backSpeed={50}
          backDelay={1}
          className="text-type"
          loop
          smartBackspace
        />
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
