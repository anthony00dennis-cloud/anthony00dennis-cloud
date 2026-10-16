"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "./icons";

/**
 * Bullet list that shows the first `visible` items and reveals the rest on demand.
 * Hidden items stay in the HTML so the full history remains crawlable.
 */
export function ExpandableList({ items, visible = 4 }: { items: string[]; visible?: number }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const extra = items.length - visible;

  return (
    <div>
      <ul id={listId} className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={item}
            className={`gap-3 text-[15px] leading-7 text-body ${i >= visible && !expanded ? "hidden" : "flex"}`}
          >
            <span
              aria-hidden="true"
              className="mt-[11px] size-1.5 shrink-0 rounded-full bg-linear-to-br from-orange-300 to-rose-400"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {extra > 0 && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-elevated/60 px-3.5 py-1.5 text-sm font-medium text-orange-200 transition hover:border-orange-300/50 hover:text-orange-100"
        >
          {expanded ? "Show less" : `Show ${extra} more`}
          <ChevronDownIcon className={`size-4 transition ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
