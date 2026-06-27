"use client";

import { useCameraStore } from "@/stores/useCameraStore";

export default function TopNavbar() {
  const { setView, view } = useCameraStore();

  return (
    <div className="absolute top-0 self-center py-4 z-10 left-1/2 -translate-x-1/2">
      <div className="bg-white rounded-lg shadow-xs px-4 py-2 flex flex-col">
        <span className="font-semibold text-slate-600 text-sm">
          Camera Views
        </span>
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setView("front")}
            className={`${view === "front" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-expand" />
            Front
          </button>
          <button
            onClick={() => setView("back")}
            className={`${view === "back" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-collapse" />
            Back
          </button>
          <button
            onClick={() => setView("left")}
            className={`${view === "left" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-arrow-left" />
            Left
          </button>
          <button
            onClick={() => setView("right")}
            className={`${view === "right" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-arrow-right" />
            Right
          </button>
          <button
            onClick={() => setView("top")}
            className={`${view === "top" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-arrow-up" />
            Top
          </button>
          <button
            onClick={() => setView("bottom")}
            className={`${view === "bottom" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-arrow-down" />
            Bottom
          </button>
          <button
            onClick={() => setView("isometric")}
            className={`${view === "isometric" ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border border-slate-400 text-slate-600"} px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer group hover:bg-indigo-500 hover:border-indigo-500 hover:text-white`}
          >
            <i className="iconoir-cube" />
            Isometric
          </button>
        </div>
      </div>
    </div>
  );
}
