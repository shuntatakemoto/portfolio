import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="navbar">
          <li className="navbar__item"><Link className="navbar__link" to="/">home</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/about">about</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/works">works</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/skills">skills</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
