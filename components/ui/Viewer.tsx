"use client";

import { Canvas } from "@react-three/fiber";
import { Bounds, GizmoHelper, GizmoViewcube, Grid } from "@react-three/drei";
import STLModel from "./STLModel";
import { lowerBase, upperBase } from "@/utils/getDentalFiles";
import CameraController from "./CameraController";
import { useConfigStore } from "@/stores/useConfigStore";

export default function Viewer() {
  const {
    config: { mouth, wireframe, grid, axes },
  } = useConfigStore();

  const degToRad = (deg: number) => deg * (Math.PI / 180);

  return (
    <Canvas
      camera={{
        position: [0, 0, 250],
      }}
      className="bg-slate-50"
    >
      <GizmoHelper alignment="top-right">
        <GizmoViewcube />
      </GizmoHelper>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      {grid && <Grid infiniteGrid />}
      {axes && <axesHelper args={[100]} />}

      <Bounds fit clip observe>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {upperBase.map((file) => (
            <STLModel
              key={file}
              url={`/assets/${file}`}
              wireframe={wireframe}
            />
          ))}

          <group position={[0, 0, -mouth]} rotation={[degToRad(mouth), 0, 0]}>
            {lowerBase.map((file) => (
              <STLModel
                key={file}
                url={`/assets/${file}`}
                wireframe={wireframe}
              />
            ))}
          </group>
        </group>
      </Bounds>
      <CameraController />
    </Canvas>
  );
}
