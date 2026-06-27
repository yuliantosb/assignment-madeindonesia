"use client";

import { useConfigStore } from "@/stores/useConfigStore";

export default function RightSidebar() {
  const {
    config: { mouth, wireframe, grid, axes },
    setConfig,
  } = useConfigStore();

  return (
    <div className="px-2 py-6 absolute right-0 bottom-0 z-10 flex flex-col gap-4">
      <div className="bg-white px-4 py-6 w-[260px] rounded-md">
        <div className="border border-slate-100 p-2 rounded-md">
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-500 uppercase text-xs font-semibold">
              Mouth Opening
            </span>
            <span className="text-slate-400 text-xs font-semibold">
              {mouth}&deg;
            </span>
          </div>
          <div className="w-full">
            <input
              id="default-range"
              type="range"
              value={mouth}
              className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer"
              onChange={(e: any) => {
                setConfig({ mouth: e.target.value });
              }}
              min={0}
              max={45}
            />
            <div className="flex items-center justify-between">
              <span className="text-slate-600 font-semibold text-xs">
                0&deg;
              </span>
              <span className="text-slate-600 font-semibold text-xs">
                45&deg;
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-6 w-[260px] rounded-md">
        <div className="border border-slate-100 p-2 rounded-md">
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-500 uppercase text-xs font-semibold">
              View Options
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-slate-600">Wireframe</span>
              <div
                onClick={() => setConfig({ wireframe: !wireframe })}
                className="bg-slate-200 rounded-full w-7 h-4 relative p-0.5 cursor-pointer"
              >
                <div
                  className={`${wireframe ? "bg-indigo-500 right-0" : "bg-slate-600 left-0"} rounded-full h-3 w-3 absolute transition-all`}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-slate-600">Axes</span>
              <div
                onClick={() => setConfig({ axes: !axes })}
                className="bg-slate-200 rounded-full w-7 h-4 relative p-0.5 cursor-pointer"
              >
                <div
                  className={`${axes ? "bg-indigo-500 right-0" : "bg-slate-600 left-0"} rounded-full h-3 w-3 absolute transition-all`}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-slate-600">Grid</span>
              <div
                onClick={() => setConfig({ grid: !grid })}
                className="bg-slate-200 rounded-full w-7 h-4 relative p-0.5 cursor-pointer"
              >
                <div
                  className={`${grid ? "bg-indigo-500 right-0" : "bg-slate-600 left-0"} rounded-full h-3 w-3 absolute transition-all`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
