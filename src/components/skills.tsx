import type { ComponentType, SVGProps } from "react";
import { profile, skillGroups } from "@/data/profile";
import {
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  FlaskIcon,
  LayoutIcon,
  ServerIcon,
  SparkIcon,
  UsersIcon,
} from "./icons";
import { Accent, Chip, IconTile, Section } from "./section";

const GROUP_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Languages: CodeIcon,
  "Front End & Mobile": LayoutIcon,
  "Back End": ServerIcon,
  Databases: DatabaseIcon,
  "Cloud & DevOps": CloudIcon,
  Testing: FlaskIcon,
  "Ways of Working": UsersIcon,
};

export function Skills() {
  const total = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);
  const topSkills = new Set(profile.topSkills);

  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      glow="right"
      title={
        <>
          The <Accent>toolkit.</Accent>
        </>
      }
      intro="Deepest in the JavaScript and TypeScript ecosystem, comfortable across databases, cloud platforms and the delivery pipeline that gets code to production."
    >
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = GROUP_ICONS[group.name] ?? SparkIcon;
          return (
            <li
              key={group.name}
              className="card rounded-3xl border border-line/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/40"
            >
              <div className="flex items-center gap-3">
                <IconTile>
                  <Icon className="size-5" />
                </IconTile>
                <h3 className="flex-1 font-semibold text-fg">{group.name}</h3>
                <span className="font-mono text-xs text-faint">{String(group.skills.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip highlight={topSkills.has(skill)}>
                      {topSkills.has(skill) && <SparkIcon className="size-3" />}
                      {skill}
                    </Chip>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}

        <li className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-orange-300/30 bg-linear-to-br from-orange-500/25 via-rose-500/15 to-violet-500/25 p-6">
          <div>
            <p className="text-gradient font-serif text-8xl leading-none italic">{total}</p>
            <p className="mt-3 text-sm leading-6 text-body">
              skills across languages, frameworks, data, cloud and process.
            </p>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-orange-100">
            <SparkIcon className="size-3" />
            marks a top skill
          </p>
        </li>
      </ul>
    </Section>
  );
}
