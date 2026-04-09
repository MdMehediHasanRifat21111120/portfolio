import { education } from "@/lib/data";
export function Education() {
  return (
    <div className="flex flex-col gap-0">
      {education.map((item, i) => (
        <div key={i} className="group relative grid grid-cols-[1px_1fr] gap-6">
          <div className="flex flex-col items-center">
            <div className="size-2.5 rounded-full border border-zinc-600 bg-[#0a0a0a] group-hover:border-white group-hover:bg-white transition-all duration-300 mt-1 shrink-0 z-10" />
            {i < education.length - 1 && (
              <div className="flex-1 w-px bg-zinc-800 mt-1" />
            )}
          </div>
          <div className="pb-10">
            <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
              {item.period}
            </span>
            <h3 className="text-white font-bold text-base tracking-tight mt-1.5 group-hover:text-zinc-200 transition-colors duration-200">
              {item.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-1.5">
              <span className="text-zinc-500 text-sm">{item.institution}</span>
              <span className="h-px w-4 bg-zinc-700" />
              <span className="text-zinc-600 text-xs tracking-wide">
                {item.grade}
              </span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mt-3 max-w-lg">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
