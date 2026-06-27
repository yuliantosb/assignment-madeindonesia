"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Bounds,
  GizmoHelper,
  GizmoViewcube,
  PerspectiveCamera,
} from "@react-three/drei";
import STLModel from "./STLModel";
import { lowerBase, upperBase } from "@/utils/getDentalFiles";
import { useEffect, useRef } from "react";
import { useCameraStore } from "@/stores/useCameraStore";

export default function Viewer() {
  const { position } = useCameraStore();
  const controls = useRef(null);
  const camera = useRef(null);

  useEffect(() => {
    console.log(position, "position");
  }, [position]);

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

      <Bounds fit clip observe>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {upperBase.map((file) => (
            <STLModel key={file} url={`/assets/${file}`} />
          ))}

          {lowerBase.map((file) => (
            <STLModel key={file} url={`/assets/${file}`} />
          ))}
        </group>
      </Bounds>

      <OrbitControls makeDefault />
    </Canvas>
  );
}
