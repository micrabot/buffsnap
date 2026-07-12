import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "General website and service-request terms for BuffSnap.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Website Terms", path: "/terms" }])} />
      <Header />
      <main id="main-content" className="legal-page">
        <div className="shell legal-content">
          <div className="eyebrow dark">Effective July 11, 2026</div>
          <h1>Website Terms</h1>
          <p>Information on this website is provided for general service and marketing purposes. Submitting a quote request does not create a contract or guarantee availability, pricing, scheduling, publication, or a particular project result.</p>
          <h2>Quotes and project scope</h2>
          <p>Final pricing, deliverables, access requirements, travel, scheduling, payment terms, hosting, publication, and usage rights will be established in a written estimate, work order, or agreement for each project.</p>
          <h2>Third-party platforms</h2>
          <p>Google Maps, Google Business Profile, Matterport, Zillow, and other third-party services control their own platforms, policies, availability, processing, and content decisions. BuffSnap cannot guarantee permanent third-party hosting, indexing, placement, traffic, views, or uninterrupted availability.</p>
          <h2>Project references</h2>
          <p>Named project locations may reflect work completed as an independent capture technician or subcontractor for engineering firms, project providers, or other companies. No endorsement, partnership, or direct client relationship is implied unless expressly stated.</p>
          <h2>Website content</h2>
          <p>BuffSnap branding, original copy, and original images may not be reused commercially without permission. Third-party names and trademarks belong to their respective owners.</p>
          <h2>Questions</h2>
          <p>Use the <Link href="/#quote">BuffSnap quote form</Link> for questions about these terms or a proposed project.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
