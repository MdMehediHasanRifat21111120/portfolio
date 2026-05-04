"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import { contacts } from "../../lib/data";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) setSubmitted(true);
      else alert(data.error || "Something went wrong");
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left */}
        <div className="col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />
            <span className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
              Get in touch
            </span>
          </div>

          <h2 className="text-white text-3xl lg:text-4xl font-extrabold leading-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
              Work Together
            </span>
          </h2>

          <div className="h-px w-10 bg-zinc-700" />

          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Have a project in mind or just want to say hello? Fill out the form
            and I'll get back to you within 24 hours.
          </p>

          {/* Contact list */}
          <div className="flex flex-col gap-3 pt-2">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase w-14">
                  {item.label}
                </span>
                <span className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-400 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="col-span-7">
          {submitted ? (
            <div className="relative border border-zinc-800 p-10 flex flex-col items-center justify-center gap-3 text-center min-h-[300px]">
              <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-600" />
              <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-600" />

              <span className="text-2xl">✓</span>

              <p className="text-white font-semibold text-lg">Message sent!</p>

              <p className="text-zinc-500 text-sm">
                I'll get back to you within 24 hours.
              </p>

              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setSubmitted(false);
                }}
                className="mt-2 text-[11px] tracking-[0.3em] uppercase text-zinc-600 hover:text-white border-b border-zinc-800 hover:border-zinc-500 pb-0.5"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative border border-zinc-800 p-6 lg:p-8 flex flex-col gap-6"
            >
              <div className="absolute top-0 left-0 size-3 border-t border-l border-zinc-700" />
              <div className="absolute bottom-0 right-0 size-3 border-b border-r border-zinc-700" />

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
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
                  placeholder="Please describe your requirements in detail."
                  value={form.message}
                  onChange={handleChange}
                  className="bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm px-4 py-3 focus:outline-none focus:border-zinc-600 resize-none"
                />
              </div>

              {/* Button */}
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
        className="bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm px-4 py-2.5 focus:outline-none focus:border-zinc-600"
      />
    </div>
  );
}
