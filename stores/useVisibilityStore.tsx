import { create } from "zustand";

type VisibilityState = {
  hidden: Set<string>;

  toggle: (file: string) => void;
  hide: (file: string) => void;
  show: (file: string) => void;
  isHidden: (file: string) => boolean;
};

export const useVisibilityStore = create<VisibilityState>((set, get) => ({
  hidden: new Set(),

  toggle: (file) =>
    set((state) => {
      const next = new Set(state.hidden);

      if (next.has(file)) {
        next.delete(file);
      } else {
        next.add(file);
      }

      return { hidden: next };
    }),

  hide: (file) =>
    set((state) => {
      const next = new Set(state.hidden);
      next.add(file);
      return { hidden: next };
    }),

  show: (file) =>
    set((state) => {
      const next = new Set(state.hidden);
      next.delete(file);
      return { hidden: next };
    }),

  isHidden: (file) => get().hidden.has(file),
}));
