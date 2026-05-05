export function SkillBar({ name, level }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-zinc-300 text-sm tracking-wide">{name}</span>
      </div>
      {/* <div className="h-px w-full bg-zinc-800 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div> */}
    </div>
  );
}
