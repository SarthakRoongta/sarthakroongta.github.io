import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

/* --------------------------------- */
const desktop = { camera: [0, 2.8, 11], spot: [2, 8, 6] };
const mobile  = { camera: [0, 2.4, 15], spot: [2, 7, 9] };

const desktopModel = { pos: [0.7, -2.2, 0], rot: [-0.2, -1.5, 0], scale: 0.55 };
const mobileModel  = { pos: [0.5, -2.2, 0], rot: [-0.2, -1.4, 0], scale: 0.50 };
/* ------------------------------------------------------- */

const Computers = ({ spotPos, model }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[spotPos[0], spotPos[1], spotPos[2] + 1]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        castShadow
      />

      <primitive
        object={scene}
        scale={model.scale}
        position={model.pos}
        rotation={model.rot}
      />
    </>
  );
};
/* ------------------------------------------------------- */

const SetCamera = ({ pos }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...pos);
    camera.lookAt(0, 0, 0);
  }, [camera, pos]);
  return null;
};

/* -------------- Canvas wrapper ------------------------- */
const ComputersCanvas = () => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const camPos  = isMobile ? mobile.camera  : desktop.camera;
  const spotPos = isMobile ? mobile.spot    : desktop.spot;
  const model   = isMobile ? mobileModel    : desktopModel;

  return (
    <Canvas
      shadows
      camera={{ fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <SetCamera pos={camPos} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computers spotPos={spotPos} model={model} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
