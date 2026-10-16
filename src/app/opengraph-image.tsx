import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const stack = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "React Native"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 0% 0%, rgba(249,115,22,0.35), transparent 50%), radial-gradient(circle at 100% 10%, rgba(139,92,246,0.35), transparent 50%), #141827",
          color: "#f6f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#6ee7b7" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#34d399" }} />
          {`Open to ${profile.openTo.join(" & ")} roles`}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ fontSize: 48, color: "#fdba74", marginTop: 8 }}>{profile.headline}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24 }}>
            {`${profile.location.city}, ${profile.location.region}`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: 24,
                color: "#e4e4e7",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
