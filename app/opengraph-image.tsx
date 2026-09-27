import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0e0e0d",
          color: "#ecebe6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              background: "#ecebe6",
              color: "#0e0e0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 24, color: "#8a8882" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, letterSpacing: -3, lineHeight: 1.02 }}>{site.name}</div>
          <div style={{ fontSize: 34, color: "#bdbbb4", marginTop: 20 }}>{site.role}</div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#8a8882" }}>
          <span>Software</span>
          <span>·</span>
          <span>Cloud Infrastructure</span>
          <span>·</span>
          <span>DevOps & Platform</span>
        </div>
      </div>
    ),
    size,
  );
}
