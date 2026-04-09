const activities = [
  {
    title: "Math Olympiad Participant",
    organization: "Bangladesh Mathematical Olympiad",
    period: "2016 — 2019",
    description:
      "Competed in regional and national rounds. Developed strong analytical and problem-solving skills through rigorous mathematical challenges.",
    icon: "△",
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub",
    period: "2022 — Present",
    description:
      "Actively contribute to open source projects — bug fixes, documentation improvements, and small feature additions across React and Node.js ecosystems.",
    icon: "◈",
  },
  {
    title: "Tech Blog Writer",
    organization: "Dev.to / Personal Blog",
    period: "2023 — Present",
    description:
      "Write articles on React, Next.js, and web performance. Published 15+ posts with a combined readership of 5,000+ developers.",
    icon: "◻",
  },
  {
    title: "Programming Club — Vice President",
    organization: "University of Dhaka",
    period: "2021 — 2023",
    description:
      "Organised coding workshops, hackathons, and peer study sessions for 200+ club members. Mentored first-year students on web development basics.",
    icon: "⬡",
  },
];

export function Extracurricular() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {activities.map((item, i) => (
        <div
          key={i}
          className="group relative border border-zinc-800 p-5 flex flex-col gap-3 hover:border-zinc-600 transition-colors duration-300"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 size-2.5 border-t border-l border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 size-2.5 border-b border-r border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon + period */}
          <div className="flex items-center justify-between">
            <span className="text-zinc-600 text-lg group-hover:text-zinc-400 transition-colors duration-200">
              {item.icon}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-700 uppercase">
              {item.period}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-sm font-bold tracking-tight leading-snug group-hover:text-zinc-200 transition-colors duration-200">
            {item.title}
          </h3>

          {/* Organization */}
          <span className="text-zinc-600 text-xs tracking-wide">
            {item.organization}
          </span>

          {/* Description */}
          <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-800/80 pt-3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
