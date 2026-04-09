import Image from "next/image";
export function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="group relative flex flex-col border border-zinc-800 bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-600 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-600 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Thumbnail */}
      <div className="relative w-full h-48 bg-zinc-800 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="text-white font-bold text-lg tracking-tight">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 border border-zinc-700 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
