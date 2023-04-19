import React from 'react'
import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader" 

const Waterfalls = () => {
 const Waterfall = useGLTF('./desktop_pc/waterfall.gltf')

  return (
   <mesh>   
    <ambientLight intensity={0.5}/> 
    <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    <pointLight intensity={1}/>
    <primitive object={Waterfall.scene}
    scale={0.75}
    position={[0,0,0]}
    rotation={[-0.01,-0.2,-0.1]}/>  
   </mesh>
  )
} 
 
const WaterfallsCanvas = ()=>{ 
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[30,3,5],fov:25}} 
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}/>
      <Waterfalls/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default WaterfallsCanvas