import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { TechMarquee } from "@/components/tech-marquee";
import { education, experience, profile, skillGroups } from "@/data/profile";
import { getCurrentMonth, monthsBetween } from "@/lib/dates";

export default async function Home() {
  const today = await getCurrentMonth();
  const years = Math.floor(monthsBetween(profile.careerStart, today) / 12);

  const contactLinks = [profile.contact.linkedin, profile.contact.github].filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: "US",
    },
    worksFor: { "@type": "Organization", name: experience[0].company },
    alumniOf: education.map((entry) => ({ "@type": "CollegeOrUniversity", name: entry.school })),
    knowsAbout: skillGroups.flatMap((group) => group.skills),
    ...(profile.contact.email && { email: `mailto:${profile.contact.email}` }),
    ...(contactLinks.length > 0 && { sameAs: contactLinks }),
  };

  return (
    <>
      <SiteHeader name={profile.name} initial={profile.firstName[0]} />
      <main className="flex-1">
        <Hero years={years} />
        <TechMarquee items={skillGroups.flatMap((group) => group.skills)} />
        <About />
        <Experience today={today} years={years} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter name={profile.name} year={today.year} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
