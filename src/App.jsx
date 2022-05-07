import { useState } from 'react'
import './App.css'
import Box from './components/box'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="App">
      <header>
        <p className='logo'>3D Test</p>
        <nav>
         <a href="">About us</a>
         <a href="">Contact us</a>
        </nav>
      </header>
      <main>
        <Canvas className='box'>
          <OrbitControls/>
          <ambientLight intensity={0.5}/>
          <Box />
        </Canvas>
        
      </main>
    </div>
  )
}

export default App
