import { create } from "zustand";

export const CONFIG_DEFAULT = {
  mouth: 0,
  wireframe: false,
  axes: false,
  grid: false,
};

type Config = typeof CONFIG_DEFAULT;

type Store = {
  config: Config;

  setConfig: (config: Partial<Config>) => void;
};

export const useConfigStore = create<Store>((set) => ({
  config: CONFIG_DEFAULT,

  setConfig: (config) =>
    set((state) => ({
      config: {
        ...state.config,
        ...config,
      },
    })),
}));
