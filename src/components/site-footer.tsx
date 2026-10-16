import { ArrowUpIcon } from "./icons";

export function SiteFooter({ name, year }: { name: string; year: number }) {
  return (
    <footer className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} <span className="text-body">{name}</span>. Built with Next.js &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 rounded-full border border-line/70 px-4 py-2 transition hover:border-orange-300/50 hover:text-fg"
        >
          Back to top
          <ArrowUpIcon className="size-4 transition group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
