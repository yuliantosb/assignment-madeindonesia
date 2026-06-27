import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-white px-4 py-2 flex flex-col rounded-md">
        <span className="text-slate-500 font-semibold text-center">
          Loading
        </span>
        <span className="text-slate-500 relative w-[200px] mt-6 rounded-full bg-slate-100 text-center">
          {Math.round(progress)}%
          <span
            style={{ width: `${progress}%` }}
            className="bg-indigo-500 rounded-full left-0"
          />
        </span>
      </div>
    </Html>
  );
}
