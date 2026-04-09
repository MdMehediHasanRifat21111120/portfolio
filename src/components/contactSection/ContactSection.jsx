"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import { contacts } from "../../lib/data";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up your email service here (Resend, EmailJS, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* ── Left: info ── */}
        <div className="col-span-5 flex flex-col gap-7 lg:sticky lg:top-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />
            <span className="text-[11px] tracking-[0.4em] text-zinc-500 uppercase">
              Get in touch
            </span>
          </div>

          <h2 className="text-white text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
              Work Together
            </span>
          </h2>

          <div className="h-px w-12 bg-zinc-700" />

          <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
            Have a project in mind or just want to say hello? Fill out the form
            and I'll get back to you within 24 hours.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-4 pt-2">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase w-16 shrink-0">
                  {item.label}
                </span>
                <span className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-400 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="col-span-7">
          {submitted ? (
            <div className="relative border border-zinc-800 p-12 flex flex-col items-center justify-center gap-4 text-center min-h-80">
              <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-600" />
              <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-600" />
              <span className="text-3xl">✓</span>
              <p className="text-white font-bold tracking-tight text-xl">
                Message sent!
              </p>
              <p className="text-zinc-500 text-sm">
                I'll get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setSubmitted(false);
                }}
                className="mt-2 text-[11px] tracking-[0.3em] uppercase text-zinc-600 hover:text-white transition-colors duration-200 border-b border-zinc-800 hover:border-zinc-500 pb-0.5"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative border border-zinc-800 p-8 flex flex-col gap-6"
            >
              <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-700" />
              <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-700" />

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className="bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  text="Send Message"
                  variant="primary"
                  type="submit"
                  icon="→"
                  iconPosition="right"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors duration-200"
      />
    </div>
  );
}
