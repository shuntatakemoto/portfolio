import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="navbar">
          <li className="navbar__item"><Link className="navbar__link" to="/">Home</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/about">About</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/works">Works</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/skills">Skills</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/posts">Posts</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
