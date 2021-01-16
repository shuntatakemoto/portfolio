import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter, Route} from 'react-router-dom';

import {HashRouter,Route} from 'react-router-dom';

import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Home from './components/Home';
import Posts from './components/Posts';

ReactDOM.render(
  // <BrowserRouter>
  // <App />
  // <Route exact path={'/portfolio/'} component={Home}/>
  // <Route path={'/portfolio/about'}  component={About}/>
  // <Route path={'/portfolio/works'} component={Works}/>
  // <Route path={'/portfolio/skills'} component={Skills}/>
  // <Route path={'/portfolio/posts'} component={Posts}/>
  // </BrowserRouter>
  <HashRouter>
  <App />
  <Route exact path={'/'} component={Home}/>
  <Route path={'/about'}  component={About}/>
  <Route path={'/works'} component={Works}/>
  <Route path={'/skills'} component={Skills}/>
  <Route path={'/posts'} component={Posts}/>
  </HashRouter>

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
