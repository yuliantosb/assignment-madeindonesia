"use client";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useVisibilityStore } from "@/stores/useVisibilityStore";
import { TransformControls, useGLTF } from "@react-three/drei";
import { useModelStore } from "@/stores/useModelStrore";

type Props = {
  url: string;
  type: "stl" | "glb";
  name: string;
};

export default function UniversalModel({ url, type, name }: Props) {
  const isHidden = useVisibilityStore((s) => s.isHidden(name));
  const selected = useModelStore((s) => s.selected);
  const objectType = useModelStore<any>((s) => s.objectType);

  const select = useModelStore((s) => s.select);

  const isSelected = selected === name;

  if (isHidden) return null;

  const content = (
    <group
      onClick={(e) => {
        e.stopPropagation();

        select(name);
      }}
    >
      {type === "stl" ? <STLMesh url={url} /> : <GLBMesh url={url} />}
    </group>
  );

  if (!isSelected) {
    return content;
  }

  return <TransformControls mode={objectType}>{content}</TransformControls>;
}

function STLMesh({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial />
    </mesh>
  );
}

function GLBMesh({ url }: { url: string }) {
  const gltf = useGLTF(url);

  return <primitive object={gltf.scene} />;
}
