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

      {/* Standard ball when not in pokeMode */}
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

      {/* Pokéball in pokeMode */}
      {pokeMode && (
        <>
          {/* Top hemisphere (red) with logo decal placed above the ring */}
          <mesh castShadow receiveShadow scale={2.75}>
            <sphereGeometry
              args={[
                1,           // radius
                64,          // widthSegments
                64,          // heightSegments
                0,           // phiStart
                2 * Math.PI, // phiLength
                0,           // thetaStart (north pole)
                Math.PI / 2, // down to equator
              ]}
            />
            <meshStandardMaterial
              color="#f73322"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
            {/* move logo up onto the red half (y = 0.5, z ≈ 0.866 sits on the sphere surface) */}
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

          {/* Bottom hemisphere (white) */}
          <mesh castShadow receiveShadow scale={2.75}>
            <sphereGeometry
              args={[
                1,
                64,
                64,
                0,
                2 * Math.PI,
                Math.PI / 2,  // start at equator
                Math.PI / 2,  // down to south pole
              ]}
            />
            <meshStandardMaterial
              color="#ffffff"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
          </mesh>

          {/* Black equator ring */}
          <mesh
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.75}
            renderOrder={1}
          >
            <torusGeometry args={[1.01, 0.07, 16, 100]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          {/* Pokéball button */}
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
