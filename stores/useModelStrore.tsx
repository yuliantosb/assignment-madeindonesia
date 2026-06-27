import { create } from "zustand";

export type UploadedModel = {
  name: string;
  url: string;
  type: "stl" | "glb";
};

type Store = {
  models: UploadedModel[];
  selected: string | null;
  addFiles: (files: File[], cb?: () => void) => void;
  removeFile: (name: string) => void;
  clear: () => void;
  select: (name: string | null) => void;
  objectType: string;
  setObjectType: (name: string) => void;
};

export const useModelStore = create<Store>((set) => ({
  models: [],
  selected: null,
  objectType: "scale",
  select: (name) =>
    set({
      selected: name,
    }),
  addFiles: (files, cb) => {
    const parsed = files
      .filter((file) => {
        const ext = file.name.split(".").pop()?.toLowerCase();

        return ext === "stl" || ext === "glb";
      })
      .map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.name.endsWith(".glb") ? "glb" : "stl",
      }));

    set((state: any) => ({
      models: [...state.models, ...parsed],
    }));

    cb?.();
  },
  setObjectType: (name) =>
    set({
      objectType: name,
    }),

  removeFile: (name) =>
    set((state) => {
      const model = state.models.find((x) => x.name === name);

      if (model) {
        URL.revokeObjectURL(model.url);
      }

      return {
        models: state.models.filter((x) => x.name !== name),
      };
    }),

  clear: () =>
    set((state) => {
      state.models.forEach((x) => {
        URL.revokeObjectURL(x.url);
      });

      return {
        models: [],
      };
    }),
}));
