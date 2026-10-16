import { experience, type YearMonth } from "@/data/profile";
import { formatDuration, formatYearMonth, monthsBetween } from "@/lib/dates";
import { ExpandableList } from "./expandable-list";
import { Accent, Chip, CompanyMark, Section } from "./section";

export function Experience({ today, years }: { today: YearMonth; years: number }) {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      glow="left"
      title={
        <>
          {years}+ years of shipping <Accent>production</Accent> software.
        </>
      }
      intro="From PHP and BigCommerce storefronts to NestJS platforms and React Native apps: a career spent across the whole stack, leading teams and mentoring engineers along the way."
    >
      <ol>
        {experience.map((role) => {
          const isCurrent = role.end === null;
          const end = role.end ?? today;
          return (
            <li key={`${role.company}-${role.title}`} className="grid sm:grid-cols-[10.5rem_1fr] lg:grid-cols-[13rem_1fr]">
              <div className="relative pb-4 sm:border-r sm:border-line/70 sm:pt-7 sm:pr-8 sm:pb-0 sm:text-right">
                <span
                  aria-hidden="true"
                  className={`absolute top-8 -right-[6px] hidden size-3 rounded-full ring-4 ring-canvas sm:block ${
                    isCurrent
                      ? "bg-orange-300 shadow-[0_0_0_7px_rgb(251_146_60/0.2)]"
                      : "border-2 border-line bg-elevated"
                  }`}
                />
                <p className="font-mono text-sm text-fg">
                  {formatYearMonth(role.start)} – {isCurrent ? "Present" : formatYearMonth(end)}
                </p>
                <p className="mt-2 inline-block rounded-full bg-elevated/80 px-2.5 py-0.5 text-xs text-muted">
                  {formatDuration(monthsBetween(role.start, end))}
                </p>
              </div>

              <div className="pb-10 sm:pl-8">
                <article
                  className={`card rounded-3xl border p-6 transition duration-300 hover:-translate-y-0.5 sm:p-8 ${
                    isCurrent
                      ? "border-orange-300/40 shadow-[0_24px_60px_-28px_rgb(251_146_60/0.45)]"
                      : "border-line/70 hover:border-line"
                  }`}
                >
                  <header className="flex items-start gap-4">
                    <CompanyMark initials={role.initials} color={role.brandColor} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold text-fg sm:text-xl">{role.title}</h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/30">
                            <span className="size-1.5 rounded-full bg-emerald-400" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-muted">{role.company}</p>
                    </div>
                  </header>

                  <div className="mt-6">
                    <ExpandableList items={role.highlights} />
                  </div>

                  <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2 border-t border-line/60 pt-5">
                    {role.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
