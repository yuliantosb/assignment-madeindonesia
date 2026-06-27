"use client";

import { useCameraStore } from "@/stores/useCameraStore";
import { useMouseStore } from "@/stores/useMouseStore";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import JEASINGS from "jeasings";
import { useEffect, useRef } from "react";
import { MOUSE } from "three";

function JEasings() {
  useFrame(() => {
    JEASINGS.update();
  });
  return null;
}

export default function CameraController() {
  const { camera } = useThree();
  const { position } = useCameraStore();
  const { type } = useMouseStore();
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!position || !ref.current) return;

    new JEASINGS.JEasing(ref.current.target)
      .to(
        {
          x: 0,
          y: 0,
          z: -15,
        },

        350,
      )
      .easing(JEASINGS.Cubic.Out)
      .start();

    new JEASINGS.JEasing(camera.position)
      .to(
        {
          x: position[0],
          y: position[1],
          z: position[2],
        },
        350,
      )
      .easing(JEASINGS.Cubic.Out)
      .start();
  }, [position]);

  return (
    <>
      <JEasings />
      <OrbitControls
        target={[0, 0, 250]}
        makeDefault
        ref={ref}
        mouseButtons={{
          LEFT: MOUSE[type],
        }}
      />
    </>
  );
}
