// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import {
//   Decal, Float, OrbitControls, Preload, useTexture,
// } from '@react-three/drei'
// import CanvasLoader from '../Loader'

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl])

//   return (
//     <>
//       <ambientLight intensity={1.25} />
//       <directionalLight position={[0, 0, 0.05]}/>
//       <mesh castShadow receiveShadow scale={2.75} >
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={- 5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//         />
//       </mesh>
//     </>
//   )
// }

// const BallCanvas = ({ icon }) => {  
//   return (
//     <Canvas
//       frameloop='demand'
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   )
// }
// export default BallCanvas

// To Resolve the issue of WeGL lost
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ tech, position, onHover, isMobile }) => {
  const [decal] = useTexture([tech.icon]);
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh
        castShadow
        receiveShadow
        // Scale is smaller on mobile
        scale={isMobile ? 0.9 : 1.2}
        position={position}
        onPointerOver={() => onHover(tech.name)}
        onPointerOut={() => onHover(null)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.5}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ techs, onHover }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Adjust columns or spacing if desired
  const columns = Math.min(5, techs.length);
  const spacing = isMobile? 1.8: 3;

  const balls = techs.map((tech, index) => {
    const x = (index % columns) * spacing - ((columns - 1) * spacing) / 2;
    const y = -Math.floor(index / columns) * spacing;
    const position = [x, y, 0];
    return (
      <Ball key={tech.name} tech={tech} position={position} onHover={onHover} isMobile={isMobile} />
    );
  });

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      orthographic
      camera={{ zoom: isMobile ? 41 : 50, position: [0, 0, 100] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {balls}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
