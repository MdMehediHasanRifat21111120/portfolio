"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import { navLinks } from "../../lib/data";

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = (id) => {
    smoothScroll(id);
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main bar */}
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Logo — clicks scroll to top, no href navigation */}
          <button
            type="button"
            onClick={scrollToTop}
            className="shrink-0 flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-white text-base font-extrabold tracking-[0.2em] uppercase transition-colors duration-200 group-hover:text-zinc-300">
              Rifat
            </span>
            <span className="size-1.5 rounded-full bg-white mb-2 group-hover:bg-zinc-400 transition-colors duration-200" />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className="relative px-4 py-2 text-[11px] tracking-[0.3em] text-zinc-500 uppercase hover:text-white transition-colors duration-200 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Button
              type="button"
              text="Hire Me"
              variant="primary"
              size="sm"
              onClick={() => handleNav("contact")}
            />
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setNavbarOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden size-8 flex flex-col justify-center items-center gap-[5px]"
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${navbarOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${navbarOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${navbarOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#0a0a0a] border-b border-zinc-800/60 overflow-hidden transition-all duration-300 ease-in-out ${navbarOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <button
              type="button"
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="flex items-center justify-between py-3 border-b border-zinc-800/60 text-zinc-500 text-[11px] tracking-[0.3em] uppercase hover:text-white transition-colors duration-200 group w-full text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-zinc-700 tabular-nums">0{i + 1}</span>
                {link.label}
              </div>
              <span className="text-zinc-700 group-hover:text-white transition-colors duration-200">
                ↗
              </span>
            </button>
          ))}
          <div className="pt-4">
            <Button
              type="button"
              text="Hire Me"
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => handleNav("contact")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
