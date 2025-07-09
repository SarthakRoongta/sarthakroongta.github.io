import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Environment,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Pokeball = () => {
  const { scene } = useGLTF("/master_ball/scene.gltf");
  return (
    <primitive
      object={scene}
      // try 1 or 2 here instead of 100
      scale={110}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const PokeballCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* allow the ball to slowly spin */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* basic fill light */}
        <ambientLight intensity={0.3} />

        {/* bright key light */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />

        {/* studio‐style HDR environment for reflections */}
        <Environment
          // You can swap this for "sunset", "city", "park", etc.
          preset="studio"
          background={false}
        />

        <Pokeball />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PokeballCanvas;
