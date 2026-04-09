const base =
  "inline-flex items-center justify-center gap-2 font-medium text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none select-none";

const variants = {
  primary:
    "bg-white text-zinc-900 border border-white px-8 py-3.5 hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] active:translate-y-0",

  outline:
    "group relative bg-transparent text-white border border-zinc-700 px-8 py-3.5 overflow-hidden hover:border-white hover:text-zinc-900",

  ghost:
    "group relative bg-transparent text-zinc-500 border-none px-0 py-1 hover:text-white",

  danger:
    "bg-transparent text-red-400 border border-red-900 px-8 py-3.5 hover:bg-red-950 hover:border-red-700 hover:text-red-300",

  pill: "bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-full px-7 py-3 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white",

  icon: "size-11 border border-zinc-800 text-zinc-500 hover:border-zinc-500 hover:text-white hover:bg-zinc-900",
};

const sizes = {
  sm: "!text-xs !px-5 !py-2.5 !tracking-widest",
  md: "",
  lg: "!text-base !px-10 !py-4",
};

export function Button({
  text = "Click Me",
  variant = "primary",
  size = "md",
  icon = null,
  iconPosition = "right",
  disabled = false,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        base,
        variants[variant] ?? variants.primary,
        sizes[size] ?? "",
        className,
      ].join(" ")}
    >
      {/* Outline fill layer */}
      {variant === "outline" && (
        <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
      )}

      {/* Ghost underline */}
      {variant === "ghost" && (
        <span className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
      )}

      {/* Icon-only */}
      {variant === "icon" ? (
        <span className="transition-transform duration-200 group-hover:-translate-y-px">
          {icon ?? text}
        </span>
      ) : (
        <span className="relative inline-flex items-center gap-2">
          {icon && iconPosition === "left" && <span>{icon}</span>}
          {text}
          {icon && iconPosition === "right" && (
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              {icon}
            </span>
          )}
        </span>
      )}
    </button>
  );
}
