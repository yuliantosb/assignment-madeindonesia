"use client";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";
import { useMemo } from "react";

type Props = {
  url: string;
};

export default function STLModel({ url }: Props) {
  const geometry = useLoader(STLLoader, url);

  const material = useMemo(() => {
    const isAlveolar = url.includes("alveolar");
    const isBase = url.includes("base");
    return new THREE.MeshStandardMaterial({
      color: isBase ? "#cfcfcf" : isAlveolar ? "#e8b8bf" : "#f4f4f1",
      roughness: 0.6,
    });
  }, [url]);

  return (
    <mesh geometry={geometry} material={material} castShadow receiveShadow />
  );
}
