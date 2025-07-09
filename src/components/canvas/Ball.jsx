// BallCanvas.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, pokeMode }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.1]} />

      {!pokeMode && (
        <mesh castShadow receiveShadow scale={2.75}>
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
            scale={0.9}
            map={decal}
            flatShading
          />
        </mesh>
      )}

      {pokeMode && (
        <>
          <mesh castShadow receiveShadow scale={2.75}>
            <sphereGeometry
              args={[
                1,           
                64,          
                64,          
                0,           
                2 * Math.PI, 
                0,          
                Math.PI / 2, 
              ]}
            />
            <meshStandardMaterial
              color="#f73322"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
            <Decal
              position={[0, 0.5, 0.866]}
              rotation={[2 * Math.PI, 0, 6.25]}
              scale={0.9}
              map={decal}
              flatShading
              polygonOffset
              polygonOffsetFactor={10}
              renderOrder={2}
            />
          </mesh>

          <mesh castShadow receiveShadow scale={2.75}>
            <sphereGeometry
              args={[
                1,
                64,
                64,
                0,
                2 * Math.PI,
                Math.PI / 2,  
                Math.PI / 2, 
              ]}
            />
            <meshStandardMaterial
              color="#ffffff"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
          </mesh>

          <mesh
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.75}
            renderOrder={1}
          >
            <torusGeometry args={[1.01, 0.07, 16, 100]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          <mesh position={[0, 0, 1.01]} scale={2.75} renderOrder={1}>
            <circleGeometry args={[0.12, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0, 0, 1.02]} scale={2.75} renderOrder={1}>
            <circleGeometry args={[0.06, 32]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </>
      )}
    </Float>
  );
};

const BallCanvas = ({ icon, pokeMode }) => (
  <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} pokeMode={pokeMode} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
