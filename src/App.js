import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="navbar">
          <li className="navbar__item"><Link className="navbar__link" to="/portfolio/">Home</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/portfolio/about">About</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/portfolio/works">Works</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/portfolio/skills">Skills</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/portfolio/posts">Posts</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
