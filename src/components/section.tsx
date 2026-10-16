import type { ReactNode } from "react";

export function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  glow,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Soft background light behind the section. */
  glow?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative isolate overflow-x-clip">
      {glow && (
        <div
          aria-hidden="true"
          className={`absolute top-32 -z-10 size-[560px] rounded-full blur-[130px] ${
            glow === "left" ? "-left-64 bg-violet-500/15" : "-right-64 bg-orange-500/15"
          }`}
        />
      )}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
          <h2
            id={`${id}-title`}
            className="mt-5 text-4xl font-semibold tracking-tight text-balance text-fg sm:text-5xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 text-base leading-7 text-pretty text-muted sm:text-lg sm:leading-8">{intro}</p>}
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 rounded-full border border-line/70 bg-surface/70 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.2em] text-orange-300 uppercase backdrop-blur">
      <span className="text-faint">{index}</span>
      <span aria-hidden="true" className="h-3 w-px bg-line" />
      {children}
    </p>
  );
}

/** Italic serif highlight for a word or two in a heading. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="text-gradient pr-[0.08em] font-serif font-normal italic">{children}</em>;
}

export function Chip({ children, highlight = false }: { children: ReactNode; highlight?: boolean }) {
  return (
    <span
      className={
        highlight
          ? "inline-flex items-center gap-1.5 rounded-full border border-orange-300/40 bg-orange-400/15 px-3 py-1 text-[13px] font-medium text-orange-100"
          : "inline-flex items-center rounded-full border border-line/80 bg-elevated/70 px-3 py-1 text-[13px] text-body"
      }
    >
      {children}
    </span>
  );
}

export function CompanyMark({
  initials,
  color,
  size = "md",
}: {
  initials: string;
  color: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center font-bold tracking-tight text-white shadow-lg shadow-black/30 ring-1 ring-white/15 ${
        size === "sm" ? "size-9 rounded-lg text-xs" : "size-12 rounded-xl text-sm"
      }`}
      style={{ backgroundImage: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 55%, black))` }}
    >
      {initials}
    </span>
  );
}

/** Rounded icon tile with the brand gradient. */
export function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-orange-300/20 bg-linear-to-br from-orange-400/20 via-rose-400/10 to-violet-400/20 text-orange-200">
      {children}
    </span>
  );
}
