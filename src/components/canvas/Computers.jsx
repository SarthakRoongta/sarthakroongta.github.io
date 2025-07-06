import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-loader" />
      <p style={{ color: "#fff", marginTop: 20 }}>{progress.toFixed(0)} %</p>
    </Html>
  );
};

const desktop = { camera: [0, 2.8, 11] };
const mobile  = { camera: [1.2, 2.6, 18] };                 // ← farther & shifted right

const desktopModel = { pos: [0.7, -2.2, 0], rot: [-0.2, -1.5, 0], scale: 0.55 };
const mobileModel  = { pos: [1.0, -2.4, 0], rot: [-0.2, -1.5, 0], scale: 0.44 }; // ← right & smaller

const Computers = ({ model }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const light    = useRef();

  useEffect(() => {
    light.current.target.position.set(0, -1, 0);
    light.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        ref={light}
        position={[2, 6, 6]}
        angle={0.35}
        penumbra={0.2}
        intensity={80}
        distance={120}
        decay={2}
        castShadow
      />
      <primitive object={scene} scale={model.scale} position={model.pos} rotation={model.rot} />
    </>
  );
};

const SetCamera = ({ pos }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...pos);
    camera.lookAt(0, 0, 0);
  }, [camera, pos]);
  return null;
};

const ComputersCanvas = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const camPos   = isMobile ? mobile.camera  : desktop.camera;
  const model    = isMobile ? mobileModel    : desktopModel;

  return (
    <Canvas shadows camera={{ fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <SetCamera pos={camPos} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computers model={model} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
