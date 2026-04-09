"use client";
const socialLinks = [
  { label: "GitHub", href: "https://github.com/MdMehediHasanRifat21111120" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-mehedi-hasan-rifat-187539289/",
  },
  { label: "Twitter", href: "https://twitter.com" },
];

const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 64,
    behavior: "smooth",
  });
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800/60">
      {/* Top row */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <span className="text-white text-base font-extrabold tracking-[0.2em] uppercase">
              Rifat
            </span>
            <span className="size-1.5 rounded-full bg-white mb-2" />
          </div>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
            Full Stack Developer crafting fast, accessible, and polished digital
            experiences.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.35em] text-zinc-600 uppercase">
            Navigation
          </span>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => smoothScroll(link.id)}
                  className="text-zinc-500 text-sm hover:text-white transition-colors duration-200 tracking-wide cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.35em] text-zinc-600 uppercase">
            Socials
          </span>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-500 text-sm hover:text-white transition-colors duration-200 group"
                >
                  {s.label}
                  <span className="text-zinc-700 group-hover:text-white transition-colors duration-200 text-xs">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-12 flex items-center justify-between gap-4">
          <span className="text-zinc-700 text-[11px] tracking-widest uppercase">
            © {new Date().getFullYear()} Rifat. All rights reserved.
          </span>
          <span className="text-zinc-700 text-[11px] tracking-widest uppercase">
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
