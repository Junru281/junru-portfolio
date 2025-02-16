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

// import React, { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const GalaxTeaModel = ({ isMobile }) => {
//   const galaxTea = useGLTF("./galax-tea/scene.gltf"); 
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.008; 
//     }
//   });

//   return (
//     <mesh ref={modelRef}>
//       <hemisphereLight intensity={0.15} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={galaxTea.scene}
//         scale={isMobile ? 0.007 : 0.01}
//         position={isMobile ? [0, -0.5, 0] : [0, -1, 0]}
//       />
//     </mesh>
//   );
// };

// // 🎯 Custom Hook to Apply `gl.scissor` (Fixing gl.enable issue)
// const useScissorTest = () => {
//   const { gl, size } = useThree();
//   const webglContext = gl.getContext(); // Get WebGL context

//   useEffect(() => {
//     if (!webglContext) return;

//     webglContext.enable(webglContext.SCISSOR_TEST); // Enable scissor test

//     const updateScissor = () => {
//       const { width, height } = size;
//       const scissorX = Math.floor(width * 0.5); // Cut 25% from left
//       const scissorY = Math.floor(height * 0.5); // Cut 25% from bottom
//       const scissorWidth = Math.floor(width * 0.3); // Keep 50% width
//       const scissorHeight = Math.floor(height * 0.3); // Keep 50% height

//       gl.setScissor(scissorX, scissorY, scissorWidth, scissorHeight);
//       gl.setViewport(scissorX, scissorY, scissorWidth, scissorHeight);
//     };

//     updateScissor();
//     window.addEventListener("resize", updateScissor);

//     return () => {
//       webglContext.disable(webglContext.SCISSOR_TEST);
//       window.removeEventListener("resize", updateScissor);
//     };
//   }, [gl, size, webglContext]);
// };

// const GalaxTeaCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="always"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [5, 1, 5], fov: 30 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       {/* Enable Scissor Test */}
//       <ScissorTest />

//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={0} />
//         <GalaxTeaModel isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// // 🛠️ Helper Component to Enable Scissor Test
// const ScissorTest = () => {
//   useScissorTest();
//   return null;
// };

// export default GalaxTeaCanvas;



// import React, { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import galaxTeaFallback from "../../assets/galaxTeaFallback.png"; 

// const GalaxTeaModel = ({ isMobile }) => {
//   const galaxTea = useGLTF("./galax-tea/scene.gltf"); // Load the "Galax-Tea" model
//   const modelRef = useRef();

//   // Rotate the model each frame
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.008;
//     }
//   });

//   return (
//     <mesh ref={modelRef}>
//       <hemisphereLight intensity={0.15} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={galaxTea.scene}
//         scale={isMobile ? 0.007 : 0.01}
//         position={isMobile ? [0, -0.5, 0] : [0, -1, 0]}
//       />
//     </mesh>
//   );
// };

// const GalaxTeaCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [canUseWebGL, setCanUseWebGL] = useState(true);
//   const [contextLost, setContextLost] = useState(false);

//   // Check WebGL support on mount
//   useEffect(() => {
//     const canvas = document.createElement("canvas");
//     const gl =
//       canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
//     if (!gl) {
//       setCanUseWebGL(false);
//     }
//   }, []);

//   // Responsive adjustments for mobile devices
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   // If WebGL isn’t available or the context is lost, render a fallback image.
//   if (!canUseWebGL || contextLost) {
//     return (
//       <div style={{ width: "100%", height: "100%" }}>
//         <img
//           src={galaxTeaFallback}
//           alt="Galax Tea fallback"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>
//     );
//   }

//   return (
//     <Canvas
//       frameloop="always"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [5, 1, 5], fov: 30 }}
//       gl={{ preserveDrawingBuffer: true }}
//       onCreated={({ gl }) => {
//         // Listen for runtime context loss
//         gl.domElement.addEventListener(
//           "webglcontextlost",
//           (event) => {
//             event.preventDefault(); // Prevent default browser behavior
//             setContextLost(true);
//           },
//           { once: true }
//         );
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI}
//           minPolarAngle={0}
//         />
//         <GalaxTeaModel isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default GalaxTeaCanvas;
