export default function BottomNavbar() {
  return (
    <div className="absolute bottom-0 mx-auto left-1/2 -translate-x-1/2 py-4 z-10">
      <div className="bg-white rounded-lg shadow-xs px-4 py-2 flex flex-col">
        <div className="flex items-center gap-2 pt-2">
          <button className="bg-slate-100 text-indigo-500 px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col">
            <i className="iconoir-cursor-pointer" />
            Orbit
          </button>
          <button className="bg-white border border-slate-400 text-slate-600 px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500">
            <i className="iconoir-drag-hand-gesture" />
            Pan
          </button>
          <button className="bg-white border border-slate-400 text-slate-600 px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500">
            <i className="iconoir-zoom-in" />
            Zoom
          </button>
          <button className="bg-white border border-slate-400 text-slate-600 px-4 py-2 text-xs rounded-lg flex items-center gap-2 cursor-pointer flex-col group hover:bg-slate-100 hover:border-slate-200 hover:text-indigo-500">
            <i className="iconoir-undo" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
