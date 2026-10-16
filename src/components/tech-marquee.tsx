import { SparkIcon } from "./icons";

/** Endlessly scrolling strip of technologies. Two identical rows make the loop seamless. */
export function TechMarquee({ items }: { items: string[] }) {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap">
          <span className="text-lg font-medium text-muted sm:text-xl">{item}</span>
          <SparkIcon className="size-3.5 text-orange-300/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border-y border-line/60 bg-surface/50 py-6 backdrop-blur">
      <p className="sr-only">Technologies: {items.join(", ")}</p>
      <div
        aria-hidden="true"
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex w-max hover:[animation-play-state:paused] motion-safe:animate-marquee">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
