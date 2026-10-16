import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";
import { Accent, Eyebrow } from "./section";

export function Contact() {
  const { email, linkedin, github } = profile.contact;
  // Only links filled in on the profile are rendered.
  const links = [
    { href: email && `mailto:${email}`, label: "Email me", icon: MailIcon, primary: true },
    { href: linkedin, label: "LinkedIn", icon: LinkedInIcon, primary: false },
    { href: github, label: "GitHub", icon: GitHubIcon, primary: false },
  ].filter((link) => link.href);

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-line/70 bg-surface px-6 py-14 shadow-2xl shadow-black/30 sm:px-14 sm:py-20">
        <div aria-hidden="true" className="absolute -top-40 -right-24 -z-10 size-[460px] rounded-full bg-orange-500/30 blur-[110px]" />
        <div aria-hidden="true" className="absolute -bottom-48 -left-24 -z-10 size-[460px] rounded-full bg-violet-500/30 blur-[110px]" />
        <div
          aria-hidden="true"
          className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />

        <Eyebrow index="05">Contact</Eyebrow>
        <h2 id="contact-title" className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-fg sm:text-6xl">
          Let&apos;s build something <Accent>great</Accent> together.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-body">
          I&apos;m currently open to {profile.openTo.join(" and ")} roles. If you&apos;re hiring or have a
          product that needs a dependable full stack engineer, I&apos;d love to hear about it.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3 text-sm text-body">
          <li className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-emerald-100">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to work
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-elevated/70 px-4 py-2">
            <MapPinIcon className="size-4 text-orange-300" />
            {profile.location.city}, {profile.location.region}, {profile.location.country}
          </li>
        </ul>

        {links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(({ href, label, icon: Icon, primary }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className={
                  primary
                    ? "inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-400 to-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_-8px_rgb(251_146_60/0.7)] transition hover:brightness-110"
                    : "inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-6 py-3 text-sm font-semibold text-fg transition hover:border-orange-300/50 hover:bg-elevated"
                }
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
