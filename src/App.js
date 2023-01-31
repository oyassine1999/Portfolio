import { React } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AboutMe, Contact, Portfolio, Resume } from "./Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      <div className="footerbox">
        <a href="https://github.com/oyassine1999" className="footercontent">
          this is the footer
        </a>
        <a href="https://github.com/oyassine1999" className="footercontent">
          Github
        </a>
        <a href="https://github.com/oyassine1999" className="footercontent">
          anotherlink
        </a>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="name">Omar</div>
    </div>
  );
}

export default App;
