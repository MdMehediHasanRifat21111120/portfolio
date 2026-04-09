import { skills } from "@/lib/data";
import { SkillBar } from "./Skillsbar";


export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="flex flex-col gap-6">
          {/* Category header */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
              {category}
            </span>
            <span className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Bars */}
          <div className="flex flex-col gap-5">
            {items.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
