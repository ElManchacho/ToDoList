import './Footer.css';
import React from "react";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <div className="App">
      <footer className="App-header">
      <br/>
      <br/>
        <Marquee gradientWidth={0}>
          Information : Ce site n'utilise aucun cookie
        </Marquee>
      <br/>
      <br/>
      </footer>
    </div>
  );
}

export default Footer;