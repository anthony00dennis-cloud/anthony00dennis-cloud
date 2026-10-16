import { cacheLife } from "next/cache";
import type { YearMonth } from "@/data/profile";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * The current month, captured into the static page and refreshed daily, so
 * "Present" durations stay accurate without rendering per request.
 */
export async function getCurrentMonth(): Promise<YearMonth> {
  "use cache";
  cacheLife("days");
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

export function formatYearMonth({ year, month }: YearMonth) {
  return `${MONTHS[month - 1]} ${year}`;
}

/** Inclusive month count, matching how LinkedIn reports durations. */
export function monthsBetween(start: YearMonth, end: YearMonth) {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

/** e.g. "3 yrs 3 mos", "1 yr", "5 mos" */
export function formatDuration(totalMonths: number) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "1 mo";
}
