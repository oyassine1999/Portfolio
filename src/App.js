import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutMe, Contact, Portfolio, Resume } from "./Pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Navigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navcontainer">
        <Link className="nav-link text-white" to="/about">
          About
        </Link>
        <Link className="nav-link text-white" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link text-white" to="/resume">
          Resume
        </Link>
        <Link className="nav-link text-white" to="/contact">
          Contact
        </Link>
      </div>
      <div className="name text-white">Omar</div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-dark fixed-bottom d-flex justify-content-around">
      <div className="card p-2">
        <a
          href="https://github.com/oyassine1999"
          className="footercontent text-black h4"
        >
          anotherlink
        </a>
      </div>
      <div className="card p-2">
        <a
          href="https://github.com/oyassine1999"
          className="footercontent text-black h4"
        >
          Github
        </a>
      </div>
      <div className="card p-2">
        <a
          href="https://github.com/oyassine1999"
          className="footercontent text-black h4"
        >
          anotherlink
        </a>
      </div>
    </footer>
  );
}

export default App;
