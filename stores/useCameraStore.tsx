import { create } from "zustand";

const DIST = 100;

export const CAMERA_VIEWS = {
  front: [0, 0, DIST],
  back: [0, 0, -DIST],
  left: [-DIST, 0, 0],
  right: [DIST, 0, 0],
  top: [0, DIST, 0],
  bottom: [0, -DIST, 0],
  isometric: [DIST, DIST, DIST],
} as const;

type CameraPosition = readonly [number, number, number];

type CameraView = keyof typeof CAMERA_VIEWS;

type Store = {
  view: CameraView;
  position: CameraPosition;
  setView: (view: CameraView) => void;
};

export const useCameraStore = create<Store>((set) => ({
  view: "front",
  position: CAMERA_VIEWS.front,

  setView: (view) =>
    set({
      view,
      position: CAMERA_VIEWS[view],
    }),
}));
