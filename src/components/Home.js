
import React from 'react'
import './Home.css'
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
// import { css, jsx } from '@emotion/core';
// import { css, jsx } from '@emotion/react';

import Animation from './Animation'
// class Home extends React.Component {
//     render(){
//       return(
//         <div  className="wrapper">
//           <div className="home__main">
//             <div className="home__name">
//               <div className="home__description">
//                 <h1>SHUNTA TAKEMOTO</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }

// const theme = css`
//     width: 100vw;
//     height: 100vh;
// `;

// HPPのいけたコード３２ー５９
// const Thing = () => {
//     const ref = useRef();
//     useFrame(() => (ref.current.rotation.z += 0.01));
//     return (
//         <mesh
//             ref={ref}
//             onClick={e => console.log('click')}
//             onPointerOver={e => console.log('hover')}
//             onPointerOut={e => console.log('unhover')}
//         >
//             <planeBufferGeometry attach='geometry' args={[1, 1]} />
//             <meshBasicMaterial
//                 attach='material'
//                 color='hotpink'
//                 opacity={0.5}
//                 transparent
//             />
//         </mesh>
//     );
// };

// const Home = () => {
//     return (
//         <Canvas>
//             <Thing />
//         </Canvas>
//     );
// };




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