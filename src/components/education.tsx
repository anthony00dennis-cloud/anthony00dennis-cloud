import { education } from "@/data/profile";
import { GraduationCapIcon } from "./icons";
import { Accent, CompanyMark, Section } from "./section";

export function Education() {
  return (
    <Section
      id="education"
      index="04"
      eyebrow="Education"
      glow="left"
      title={
        <>
          Grounded in <Accent>computer science.</Accent>
        </>
      }
    >
      <ul className="grid gap-4">
        {education.map((entry) => (
          <li
            key={entry.school}
            className="card relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-line/70 p-7 sm:flex-row sm:items-center sm:p-10"
          >
            <GraduationCapIcon
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -bottom-10 size-56 text-violet-300/[0.07]"
            />
            <CompanyMark initials={entry.initials} color={entry.brandColor} />
            <div className="relative flex-1">
              <h3 className="text-xl font-semibold text-fg sm:text-2xl">{entry.school}</h3>
              <p className="mt-1 text-body">
                {entry.degree}, <span className="font-serif text-lg text-orange-200 italic">{entry.field}</span>
              </p>
            </div>
            <p className="relative self-start rounded-full border border-line/80 bg-elevated/70 px-4 py-1.5 font-mono text-sm text-body sm:self-center">
              {entry.startYear} – {entry.endYear}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
