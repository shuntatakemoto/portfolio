import React, { Component } from 'react';
import * as THREE from 'three';
import './Animation.css'

export default class ThreeSampleCube extends Component {

  componentDidMount(){
  	init()
  }

  render() {
    return (
       <div className="cube">
            <canvas className="ThreeSampleCube"></canvas>
       </div>
    );
  };
}

// プロパティ
var backgroundColor = "#282c34"
var cubeColor = 'rgb(192, 157, 224)'

function init() {
  // シーンを作成
  const scene = new THREE.Scene();
  // ジオメトリーを作成
//   const geometry = new THREE.IcosahedronGeometry( 100, 1 );
  const geometry = new THREE.SphereGeometry(120, 20, 20);
  // マテリアルを作成
  const material = new THREE.MeshBasicMaterial({color: cubeColor, wireframe: true});
  // メッシュを作成
  const cube = new THREE.Mesh(geometry, material);
  // 3D空間にメッシュを追加
  scene.add(cube);
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, 1.0);
  camera.position.set(0, 0, +600);
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.ThreeSampleCube'),
    antialias: true
  });
  renderer.setClearColor( backgroundColor, 1);
  //回転のアニメーション
  tick();
  function tick() {
    renderer.render(scene, camera);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.01;
    requestAnimationFrame(tick);
  }
  //リサイズした時の処理
  onResize();
  window.addEventListener('resize', onResize);
  function onResize() {
    const width = window.innerWidth*0.8;
    const height = window.innerHeight*0.6;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}