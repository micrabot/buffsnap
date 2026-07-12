import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BuildingIcon, CheckIcon, CubeIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, organizationId, serviceAreas, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial & AEC Matterport Capture Buffalo NY",
  description:
    "Matterport Pro3 capture, existing-condition documentation, surveys, pre-construction scanning, and local scan technician support in Buffalo and Western New York.",
  alternates: { canonical: "/commercial-capture" },
  openGraph: {
    title: "Commercial & AEC Matterport Capture Buffalo NY | BuffSnap",
    description:
      "Matterport Pro3 scanning, existing-condition documentation, surveys, and local capture support for engineering and construction teams.",
    url: `${siteUrl}/commercial-capture`,
    type: "website",
    locale: "en_US",
    siteName: "BuffSnap",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BuffSnap Matterport 3D tours and commercial capture" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial & AEC Matterport Capture Buffalo NY | BuffSnap",
    description: "Matterport Pro3 capture and documentation support for engineering and construction teams.",
    images: ["/twitter-image"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/commercial-capture/#service`,
  name: "Commercial and AEC Matterport Capture",
  serviceType: "Commercial and AEC reality capture",
  url: `${siteUrl}/commercial-capture`,
  provider: { "@id": organizationId },
  areaServed: serviceAreas,
  description:
    "Matterport Pro3 capture, existing-condition documentation, pre-construction scanning, surveys, measurements, and organized field data for engineering and construction teams.",
};

const breadcrumbsJsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Commercial and AEC Capture", path: "/commercial-capture" },
]);

const deliverables = ["Matterport Pro3 capture", "Existing-condition documentation", "Pre-construction scans", "Room and ceiling-height documentation", "Plenum and overhead-condition surveys", "Gondola and retail-fixture surveys", "Site data collection for engineering teams", "Large commercial and industrial capture", "Local technician support for national providers"];

export default function CommercialCapturePage() {
  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbsJsonLd]} />
      <Header />
      <main id="main-content">
        <section className="subhero commercial-subhero">
          <div className="shell subhero-content">
            <div className="icon-badge"><CubeIcon /></div>
            <div className="eyebrow">Commercial &amp; AEC capture</div>
            <h1>A Proven Local Matterport Technician for Demanding Projects.</h1>
            <p>Matterport Pro3 scanning, existing-condition documentation, pre-construction capture, survey support, and organized field data for engineering and construction teams.</p>
            <div className="button-row"><Link href="/#quote" className="button primary">Request Commercial Capture</Link><Link href="/#experience" className="button outline">Review Project Experience</Link></div>
          </div>
        </section>

        <section className="section">
          <div className="shell split-grid">
            <div>
              <div className="eyebrow dark">More than a virtual-tour photographer</div>
              <h2>Field Experience That Engineering Teams Can Use</h2>
              <p className="section-lead">Chris Kivi has completed commercial capture assignments for engineering firms, project providers, retailers, medical facilities, apartment operators, and large industrial environments.</p>
              <ul className="check-list">
                {deliverables.map((item) => <li key={item}><span><CheckIcon /></span>{item}</li>)}
              </ul>
            </div>
            <div className="case-panel">
              <BuildingIcon />
              <h3>Selected Experience</h3>
              <div><strong>450,000 sq ft</strong><span>Nestlé Purina facility collaboration</span></div>
              <div><strong>42 stores</strong><span>Home Depot capture assignments</span></div>
              <div><strong>Dozens</strong><span>Veterinary, medical, dental, retail, and conversion projects</span></div>
              <p>Some projects were performed as an independent local technician or subcontractor for engineering firms and national providers.</p>
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="shell section-heading centered">
            <div className="eyebrow dark">Equipment matched to the work</div>
            <h2>Matterport Pro3 for Scale. Pro2 for Premium Interiors.</h2>
            <p>BuffSnap uses the Pro3 for large-scale LiDAR capture and the Pro2 for polished interior work where rich visual quality is the priority.</p>
            <div className="center-cta"><Link href="/#quote" className="button primary">Discuss Your Project</Link></div>
          </div>
        </section>
      </main>
      <div className="mobile-sticky"><Link href="/#quote">Request Commercial Capture</Link></div>
      <Footer />
    </>
  );
}
