"use client";

import { useModelStore } from "@/stores/useModelStrore";
import { useMouseStore } from "@/stores/useMouseStore";

export default function BottomNavbar() {
  const { setMouseType, type } = useMouseStore();
  const { selected, objectType, setObjectType } = useModelStore();

  return (
    <div className="absolute bottom-0 mx-auto left-1/2 -translate-x-1/2 py-4 z-10">
      <div className="bg-white rounded-lg shadow-xs px-4 py-2 flex flex-col">
        {selected ? (
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setObjectType("translate")}
              className={`${objectType === "translate" ? "bg-slate-100 border-slate-200 text-indigo-500" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500`}
            >
              <i className="iconoir-drag-hand-gesture" />
              Translate
            </button>
            <button
              onClick={() => setObjectType("rotate")}
              className={`${objectType === "rotate" ? "bg-slate-100 border-slate-200 text-indigo-500" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500`}
            >
              <i className="iconoir-refresh-double" />
              Rotate
            </button>
            <button
              onClick={() => setObjectType("scale")}
              className={`${objectType === "scale" ? "bg-slate-100 border-slate-200 text-indigo-500" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500`}
            >
              <i className="iconoir-expand" />
              Scale
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setMouseType("ROTATE")}
              className={`${type === "ROTATE" ? "bg-slate-100 border-slate-200 text-indigo-500" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500`}
            >
              <i className="iconoir-cursor-pointer" />
              Orbit
            </button>
            <button
              onClick={() => setMouseType("PAN")}
              className={`${type === "PAN" ? "bg-slate-100 border-slate-200 text-indigo-500" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500`}
            >
              <i className="iconoir-drag-hand-gesture" />
              Pan
            </button>
            <button
              onClick={() => setMouseType("DOLLY")}
              className={`${type === "DOLLY" ? "bg-slate-100 border-slate-200 text-indigo-500" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500`}
            >
              <i className="iconoir-zoom-in" />
              Zoom
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
