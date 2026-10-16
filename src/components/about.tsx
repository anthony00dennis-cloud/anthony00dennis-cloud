import type { ComponentType, SVGProps } from "react";
import { education, experience, focusAreas, profile } from "@/data/profile";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  LayoutIcon,
  MapPinIcon,
  ServerIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparkIcon,
} from "./icons";
import { Accent, Chip, IconTile, Section } from "./section";

const FOCUS_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "Front End": LayoutIcon,
  "Back End": ServerIcon,
  Mobile: SmartphoneIcon,
  "Quality & Delivery": ShieldCheckIcon,
};

export function About() {
  const current = experience[0];
  const degree = education[0];
  const facts = [
    { icon: BriefcaseIcon, label: "Currently", value: `${current.title} at ${current.company}` },
    { icon: MapPinIcon, label: "Based in", value: `${profile.location.city}, ${profile.location.region}` },
    { icon: GraduationCapIcon, label: "Education", value: `${degree.field}, ${degree.school}` },
  ];

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      glow="right"
      title={
        <>
          Full stack, from the database to the <Accent>device.</Accent>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-line/70 p-7 sm:p-10 lg:col-span-2">
          <span
            aria-hidden="true"
            className="text-gradient absolute top-4 right-8 hidden font-serif text-[9rem] leading-none italic opacity-40 select-none sm:block"
          >
            &ldquo;
          </span>
          <p className="relative text-lg leading-8 text-pretty text-body sm:pr-20 sm:text-xl sm:leading-9">{profile.about}</p>
          <div className="flex items-center gap-4 border-t border-line/60 pt-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-linear-to-br from-orange-400 to-orange-700 font-semibold text-white ring-2 ring-emerald-400/70 ring-offset-2 ring-offset-surface">
              {profile.firstName[0]}
            </span>
            <div>
              <p className="font-serif text-2xl leading-tight text-fg italic">{profile.name}</p>
              <p className="text-sm text-muted">
                {profile.headline} · {profile.location.short}
              </p>
            </div>
          </div>
        </div>

        <div className="card rounded-3xl border border-line/70 p-7">
          <dl className="space-y-5">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <IconTile>
                  <Icon className="size-5" />
                </IconTile>
                <div>
                  <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
                  <dd className="mt-0.5 text-fg">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-7 border-t border-line/70 pt-6">
            <h3 className="text-xs tracking-wide text-muted uppercase">Top skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.topSkills.map((skill) => (
                <li key={skill}>
                  <Chip highlight>
                    <SparkIcon className="size-3" />
                    {skill}
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
          {focusAreas.map((area) => {
            const Icon = FOCUS_ICONS[area.title] ?? SparkIcon;
            return (
              <li
                key={area.title}
                className="card group flex flex-col rounded-3xl border border-line/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/40"
              >
                <IconTile>
                  <Icon className="size-5" />
                </IconTile>
                <h3 className="mt-5 text-lg font-semibold text-fg">{area.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{area.description}</p>
                <p className="mt-5 font-mono text-xs leading-5 text-orange-200/80">{area.tools.join(" · ")}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
