import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './component/About';
import Works from './component/Works';
import Skills from './component/Skills';
import Home from './component/Home';

ReactDOM.render(
  <BrowserRouter>
  <App />
  <Route exact path={'/'} component={Home}/>
  <Route path={'/about'}  component={About}/>
  <Route path={'/works'} component={Works}/>
  <Route path={'/skills'} component={Skills}/>
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
