import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress, active } = useProgress();

  if (!active) {
    return null;
  }

  return (
    <Html center>
      <div
        className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        shadow-lg

        px-5
        py-4

        w-[260px]
        "
      >
        <div
          className="
          text-center
          text-sm
          text-slate-500
          "
        >
          Loading dental model
        </div>

        <div
          className="
          mt-4

          h-2

          rounded-full

          bg-slate-100

          overflow-hidden
          "
        >
          <div
            className="
            h-full

            bg-indigo-500

            transition-all
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div
          className="
          mt-2

          text-center

          text-xs

          text-slate-400
          "
        >
          {Math.round(progress)}%
        </div>
      </div>
    </Html>
  );
}
