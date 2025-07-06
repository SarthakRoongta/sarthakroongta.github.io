// src/components/Loader.jsx
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-loader" />               {/* spinner div */}
      <p style={{ color: "#fff", marginTop: 40 }}>
        {progress.toFixed(0)} %
      </p>
    </Html>
  );
};

export default CanvasLoader;
