import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "David Morales — applied AI and data products, built in public";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const dir = path.join(process.cwd(), "assets", "og");
  const [regular, semibold] = await Promise.all([
    readFile(path.join(dir, "IBMPlexMono-Regular.ttf")),
    readFile(path.join(dir, "IBMPlexMono-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#fbf7ee",
          backgroundImage:
            "linear-gradient(rgba(33,30,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(33,30,22,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          padding: "78px 88px 64px 150px",
          fontFamily: "PlexMono",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 104,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: "rgba(228,87,46,0.4)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
          <span style={{ color: "#2342c7" }}>In [1]:</span>
          <span style={{ color: "#211e16", marginLeft: 22, fontWeight: 600 }}>whoami</span>
        </div>

        <div
          style={{
            marginTop: 54,
            fontSize: 99,
            fontWeight: 600,
            color: "#211e16",
            letterSpacing: "-0.04em",
          }}
        >
          David Morales
        </div>

        <div style={{ marginTop: 26, fontSize: 31, color: "#6e675a" }}>
          Applied AI &amp; data products — built in public
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6e675a",
          }}
        >
          <span>github.com/{site.handle}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span>kernel: idle</span>
            <div
              style={{
                width: 15,
                height: 15,
                borderRadius: 99,
                backgroundColor: "#2f7a4d",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "PlexMono", data: regular, weight: 400 },
        { name: "PlexMono", data: semibold, weight: 600 },
      ],
    },
  );
}
