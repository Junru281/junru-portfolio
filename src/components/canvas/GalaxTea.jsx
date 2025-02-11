import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const GalaxTeaModel = ({ isMobile }) => {
  const galaxTea = useGLTF("./galax-tea/scene.gltf"); // Load the "Galax-Tea" model
  const modelRef = useRef(); // Create a reference to the model

  // Rotate the model in each frame update
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.008; 
    }
  });

  return (
    <mesh ref={modelRef}>
      <hemisphereLight intensity={0.15} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={galaxTea.scene}
        scale={isMobile ? 0.007 : 0.01}
        position={isMobile ? [0, -0.5, 0] : [0, -1, 0]}
      />
    </mesh>
  );
};

const GalaxTeaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Ensure continuous updates for smooth rotation
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 1, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <GalaxTeaModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GalaxTeaCanvas;
