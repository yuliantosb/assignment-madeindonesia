import { create } from "zustand";

export const LEFT_MOUSE_CLICK = {
  PAN: "PAN",
  DOLLY: "DOLLY",
  ROTATE: "ROTATE",
} as const;

type MouseType = keyof typeof LEFT_MOUSE_CLICK;

type Store = {
  type: MouseType;
  setMouseType: (type: MouseType) => void;
};

export const useMouseStore = create<Store>((set) => ({
  type: "ROTATE",
  setMouseType: (type) =>
    set({
      type,
    }),
}));
