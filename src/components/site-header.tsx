"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "./icons";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader({ name, initial }: { name: string; initial: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight the nav link for the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...NAV.map((item) => item.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-full border border-line/70 bg-surface/75 pr-2 pl-2 shadow-xl shadow-black/25 backdrop-blur-xl">
          <a href="#top" className="group flex items-center gap-3 rounded-full pr-3" onClick={() => setMenuOpen(false)}>
            <span className="grid size-10 place-items-center rounded-full bg-linear-to-br from-orange-400 to-orange-700 text-sm font-semibold text-white ring-2 ring-emerald-400/70 ring-offset-2 ring-offset-surface">
              {initial}
            </span>
            <span className="font-medium tracking-tight text-fg transition group-hover:text-orange-200">{name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.slice(0, -1).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    className="rounded-full px-4 py-2 text-sm text-muted transition hover:text-fg aria-[current]:bg-elevated aria-[current]:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-linear-to-r from-orange-400 to-amber-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_6px_24px_-6px_rgb(251_146_60/0.7)] transition hover:brightness-110 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-body transition hover:bg-elevated hover:text-fg md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`mt-2 rounded-3xl border border-line/70 bg-surface/95 p-2 shadow-xl shadow-black/30 backdrop-blur-xl md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className="block rounded-2xl px-4 py-3 text-base text-body transition hover:bg-elevated hover:text-fg aria-[current]:bg-elevated aria-[current]:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
