import React, { useState, Suspense } from 'react'
import './App.css'
import Box from './components/box'
import Nike from './components/Nike'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="App">
      
      <main>
        <div className="word">
          <span>AIR MAG</span>
          <p>AIR MAG</p>
          <span>AIR MAG</span>
        </div>
        
        <Canvas className='box'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]} intensity={5}/>
          <Suspense fallback={null}>
            <Nike />
          </Suspense>
          
        </Canvas>
        
      </main>
    </div>
  )
}

export default App
