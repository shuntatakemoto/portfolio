
import React from 'react'
import '../styles/Home.css'
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
            <div className="home-sns">
                <a href="https://twitter.com/home?lang=ja"><img
                    className="home-sns-link home-twitter"
                    src={'twitter.svg'}
                    alt={'twitter'}
                /></a>
                <a href="https://github.com/shuntatakemoto"><img
                    className="home-sns-link home-github"
                    src={'github2.svg'}
                    ait={'github'}
                /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;