import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader.tsx";
import { OrbitControls, Preload } from "@react-three/drei";
import { Ball } from "./Ball.tsx";

export const BallCanvas = ({ icon }: any) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          position0={{
            x: 0,
            y: 0,
            z: 0,
          }}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
