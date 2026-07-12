import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, siteUrl } from "@/lib/site";
import "./globals.css";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "Matterport 3D Tours Buffalo NY | BuffSnap",
    template: "%s | BuffSnap",
  },
  description:
    "Premium Matterport-powered Google Maps business tours and commercial 3D capture throughout Buffalo, Western New York, and project locations across New York State.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  applicationName: "BuffSnap",
  category: "Business services",
  keywords: [
    "Matterport Buffalo NY",
    "Google Maps business tour Buffalo",
    "Google Street View photographer Buffalo",
    "commercial 3D scanning Western New York",
    "Matterport Pro3 capture",
    "AEC reality capture Buffalo",
  ],
  openGraph: {
    title: "BuffSnap | Put Your Business Inside Google Maps",
    description:
      "Premium Matterport-powered Google Maps business tours with one clear project price and no required monthly BuffSnap subscription.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "BuffSnap",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuffSnap | Matterport 3D Tours Buffalo NY",
    description:
      "Premium Matterport-powered Google Maps business tours and commercial 3D capture throughout Western New York.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
