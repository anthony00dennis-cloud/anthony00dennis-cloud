import { education, experience, profile, skillGroups } from "@/data/profile";
import { ArrowRightIcon, GraduationCapIcon, MapPinIcon } from "./icons";
import { CompanyMark } from "./section";

type CodeValue = string | string[];

function CodeLiteral({ value }: { value: CodeValue }) {
  if (typeof value === "string") return <span className="text-amber-200">&quot;{value}&quot;</span>;
  // Long arrays break one item per line, the way Prettier would print them.
  if (value.join('", "').length > 36) {
    return (
      <>
        <span className="text-faint">[</span>
        {"\n"}
        {value.map((item) => (
          <span key={item}>
            {"    "}
            <span className="text-amber-200">&quot;{item}&quot;</span>
            <span className="text-faint">,</span>
            {"\n"}
          </span>
        ))}
        {"  "}
        <span className="text-faint">]</span>
      </>
    );
  }
  return (
    <>
      <span className="text-faint">[</span>
      {value.map((item, i) => (
        <span key={item}>
          <span className="text-amber-200">&quot;{item}&quot;</span>
          {i < value.length - 1 && <span className="text-faint">, </span>}
        </span>
      ))}
      <span className="text-faint">]</span>
    </>
  );
}

function ProfileCard({ years }: { years: number }) {
  const current = experience[0];
  const degree = education[0];
  const lines: [string, CodeValue][] = [
    ["role", profile.headline],
    ["location", profile.location.short],
    ["experience", `${years}+ years`],
    ["frontend", ["React", "Next.js", "React Native"]],
    ["backend", ["Node.js", "NestJS", "Express"]],
    ["openTo", profile.openTo],
  ];

  return (
    <div className="relative motion-safe:animate-fade-up [animation-delay:150ms]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-linear-to-br from-orange-500/25 via-rose-500/10 to-violet-500/25 blur-3xl"
      />
      <div className="rounded-2xl bg-linear-to-br from-orange-300/60 via-line to-violet-300/60 p-px shadow-2xl shadow-black/40">
        <figure className="overflow-hidden rounded-[15px] bg-surface">
          <div className="flex items-center gap-2 border-b border-line/70 bg-elevated/60 px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <figcaption className="ml-3 font-mono text-xs text-muted">anthony.ts</figcaption>
          </div>
          <pre className="overflow-x-auto px-5 pt-5 pb-8 font-mono text-[12.5px] leading-7 sm:text-sm sm:leading-7">
            <code>
              <span className="text-violet-300">const</span> <span className="text-fg">anthony</span>
              <span className="text-faint">: </span>
              <span className="text-emerald-300">Engineer</span> <span className="text-faint">= {"{"}</span>
              {"\n"}
              {lines.map(([key, value]) => (
                <span key={key}>
                  {"  "}
                  <span className="text-orange-300">{key}</span>
                  <span className="text-faint">: </span>
                  <CodeLiteral value={value} />
                  <span className="text-faint">,</span>
                  {"\n"}
                </span>
              ))}
              <span className="text-faint">{"};"}</span>
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-orange-300 motion-safe:animate-pulse" />
            </code>
          </pre>
        </figure>
      </div>

      <div className="absolute -top-7 right-5 hidden items-center gap-3 rounded-2xl border border-line/80 bg-elevated/90 py-2 pr-4 pl-2 shadow-xl shadow-black/30 backdrop-blur sm:flex motion-safe:animate-float">
        <CompanyMark initials={current.initials} color={current.brandColor} size="sm" />
        <div className="leading-tight">
          <p className="text-[11px] text-muted">Currently at</p>
          <p className="text-sm font-medium text-fg">{current.company}</p>
        </div>
      </div>

      <div className="absolute -bottom-7 left-1/4 hidden items-center gap-3 rounded-2xl border border-line/80 bg-elevated/90 py-2 pr-4 pl-2 shadow-xl shadow-black/30 backdrop-blur sm:flex motion-safe:animate-float motion-safe:[animation-delay:-3s]">
        <span className="grid size-9 place-items-center rounded-lg bg-linear-to-br from-violet-400/30 to-violet-600/30 text-violet-200 ring-1 ring-violet-300/30">
          <GraduationCapIcon className="size-5" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] text-muted">{degree.field}</p>
          <p className="text-sm font-medium text-fg">{degree.school}</p>
        </div>
      </div>
    </div>
  );
}

export function Hero({ years }: { years: number }) {
  const skillCount = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);
  const stats = [
    { value: `${years}+`, label: "Years building software" },
    { value: String(experience.length), label: "Engineering roles" },
    { value: String(skillCount), label: "Skills across the stack" },
  ];

  return (
    <section id="top" className="relative isolate overflow-x-clip">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-48 -left-40 size-[620px] rounded-full bg-orange-500/30 blur-[130px]" />
        <div className="absolute -top-32 -right-40 size-[580px] rounded-full bg-violet-500/30 blur-[130px]" />
        <div className="absolute top-1/2 left-1/3 size-[420px] rounded-full bg-rose-500/15 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-canvas" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-20 px-4 pt-36 pb-24 sm:px-6 sm:pt-44 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:pb-32">
        <div className="motion-safe:animate-fade-up">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-200 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to work
            <span aria-hidden="true" className="h-3 w-px bg-emerald-300/30" />
            <span className="text-emerald-100/80">Full Stack &amp; Frontend roles</span>
          </p>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="text-gradient mt-3 pr-2 font-serif text-4xl leading-tight italic sm:text-5xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-pretty text-body">{profile.tagline}</p>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPinIcon className="size-4 text-orange-300" />
            {profile.location.city}, {profile.location.region}, {profile.location.country}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-400 to-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_-8px_rgb(251_146_60/0.7)] transition hover:brightness-110"
            >
              View my experience
              <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition hover:border-orange-300/50 hover:bg-elevated"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-line/70 rounded-2xl border border-line/70 bg-surface/60 backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                <dt className="text-xs leading-5 text-muted">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ProfileCard years={years} />
      </div>
    </section>
  );
}
