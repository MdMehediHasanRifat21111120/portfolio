"use client";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/Button";
import { info } from "@/lib/data";

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

export function HeroSection() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = (id) => {
    smoothScroll(id);
    setNavbarOpen(false);
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center px-6 lg:px-24 pt-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
        <div className="col-span-7 flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-500" />
            <span className="text-[11px] tracking-[0.4em] text-zinc-500 uppercase">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400">
              Rifat
            </span>
            <br />
            <span className="text-zinc-400 font-light text-4xl lg:text-5xl mt-1 block">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <div className="h-px w-12 bg-zinc-700" />

          <p className="text-zinc-500 text-base lg:text-lg leading-relaxed max-w-lg">
            I craft fast, accessible, and visually polished digital experiences.
            From pixel-perfect UIs to scalable backends — let's build something
            remarkable together.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button
              type="button"
              text="Hire Me"
              variant="primary"
              size="sm"
              onClick={() => handleNav("contact")}
            />
            <a href="/cv.pdf" download>
              <Button text="Download CV" variant="outline" />
            </a>
          </div>

          <div className="flex gap-10 pt-6 border-t border-zinc-800/80">
            {info.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <p className="text-white text-2xl font-bold tracking-tight">
                  {s.value}
                </p>
                <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Image side ── */}
        <div className="col-span-5 flex justify-center lg:justify-end lg:translate-x-6">
          <div className="relative">
            {/* Subtle outer glow */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-125 pointer-events-none" />

            {/* Decorative dashed ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-zinc-800 pointer-events-none" />

            {/* Photo ring */}
            <div className="relative rounded-full border border-zinc-700/50 bg-zinc-900 p-1.5 shadow-[0_0_80px_rgba(0,0,0,0.7)]">
              <div className="rounded-full w-64 h-64 lg:w-80 lg:h-80 overflow-hidden bg-zinc-900">
                <Image
                  src="/images/hero.jpg"
                  width={320}
                  height={320}
                  alt="Rifat — Full Stack Developer"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Available badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 shadow-xl whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] text-zinc-300 tracking-widest uppercase">
                Available for work
              </span>
            </div>

            {/* Corner accent — top right */}
            <div className="absolute -top-2 -right-2 size-4 border-t border-r border-zinc-500" />
            {/* Corner accent — bottom left */}
            <div className="absolute -bottom-2 -left-2 size-4 border-b border-l border-zinc-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
