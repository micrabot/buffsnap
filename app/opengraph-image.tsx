import { ImageResponse } from "next/og";

export const alt = "BuffSnap Matterport 3D tours and commercial capture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background: "linear-gradient(135deg, #050505 0%, #151515 70%, #2b2100 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 900, letterSpacing: -2 }}>
            <span>BUFF</span><span style={{ color: "#f5b400" }}>SNAP</span>
          </div>
          <div style={{ fontSize: 24, color: "#d6d6d6" }}>Matterport 3D. Trusted Results.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 950 }}>
          <div style={{ fontSize: 62, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2 }}>
            Put Your Business Inside Google Maps.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.3, color: "#e6e6e6" }}>
            Premium Matterport-powered business tours and commercial 3D capture throughout Western New York.
          </div>
        </div>
        <div style={{ display: "flex", gap: 42, fontSize: 23, fontWeight: 700 }}>
          <span style={{ color: "#f5b400" }}>Nearly 500M Google Maps views</span>
          <span>1,000+ tours</span>
          <span>Matterport since 2018</span>
        </div>
      </div>
    ),
    size,
  );
}
