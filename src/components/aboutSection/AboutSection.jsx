"use client";
import { useState } from "react";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Experience } from "./Experience";

const tabs = ["Skills", "Education", "Experience"];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="about" className="bg-[#0a0a0a] py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />
            <span className="text-[11px] tracking-[0.4em] text-zinc-500 uppercase">
              Who I am
            </span>
          </div>

          <h2 className="text-white text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
              Me
            </span>
          </h2>

          <div className="h-px w-12 bg-zinc-700" />

          <p className="text-zinc-500 text-base leading-relaxed">
            I am a Full Stack Developer experienced in building dynamic web applications using modern technologies. I work with both client-side and server-side development, ensuring seamless integration and performance. I enjoy working with tools like React, Node.js, and databases to create complete, production-ready solutions.
          </p>

         

          {/* Corner decorative bracket */}
          <div className="relative border border-zinc-800 p-5 mt-2">
            <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-500" />
            <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-500" />
            <p className="text-zinc-400 text-sm italic tracking-wide">
              "Clean code. Sharp design. Reliable delivery."
            </p>
          </div>
        </div>

        {/* ── Right: Tabs ── */}
        <div className="col-span-7 flex flex-col gap-6">
          {/* Tab buttons */}
          <div className="flex border-b border-zinc-800">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 text-xs tracking-[0.3em] uppercase transition-colors duration-200
                  ${
                    activeTab === tab
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-400"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-white" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content placeholder */}
          <div className="min-h-64 border border-zinc-800/60 p-8 relative">
            <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-700" />
            <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-700" />

            {/* Replace each block below with your real tab content */}
            {activeTab === "Skills" && (
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.35em] text-zinc-600 uppercase mb-2">
                  Technical Skills
                </p>
                <Skills/>
              </div>
            )}
            {activeTab === "Education" && (
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.35em] text-zinc-600 uppercase mb-2">
                  Education
                </p>
                  <Education/>
              </div>
            )}
            {activeTab === "Experience" && (
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.35em] text-zinc-600 uppercase mb-2">
                  Experience
                </p>
                <Experience/>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
