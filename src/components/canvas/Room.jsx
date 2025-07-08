import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-loader" />
      <p style={{ color: "#fff", marginTop: 20 }}>{progress.toFixed(0)} %</p>
    </Html>
  );
};

const desktop = { camera: [0, 2.8, 30] };
const mobile = { camera: [-10, 10, 70] };

const desktopModel = { pos: [0, -2.6, 0], rot: [0, -0.8, 0], scale: 1.3 };
const mobileModel  = { pos: [0, -3.6, 0], rot: [0, -0.8, 0], scale: 1.1 };

const Room = ({ model }) => {
  const { scene } = useGLTF("/pokemon_room/scene.gltf");
  const spot = useRef();

  useEffect(() => {
    if (!spot.current) return;
    spot.current.target.position.set(0, -1, 0);
    spot.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <ambientLight intensity={0.25} />
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        ref={spot}
        position={[3, 6, 5]}
        angle={0.4}
        penumbra={0.3}
        intensity={70}
        distance={120}
        decay={2}
        color="#ffffff"
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

const Camera = ({ pos }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...pos);
    camera.lookAt(0, 0, 0);
  }, [camera, pos]);
  return null;
};

const RoomCanvas = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const camPos   = isMobile ? mobile.camera : desktop.camera;
  const model    = isMobile ? mobileModel   : desktopModel;

  return (
    <Canvas shadows camera={{ fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Camera pos={camPos} />
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Room model={model} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
