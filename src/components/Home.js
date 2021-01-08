
import React from 'react'
import './Home.css'
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

import Animation from './Animation'

class Home extends React.Component {
  state = { isVisible: false };

  render(){
    return(
      <div  className="wrapper">
        <div className="home__main">
          <Animation className="animation" />
          <div className="home__name">
            <div className="home__description">
              <h1>SHUNTA TAKEMOTO</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;