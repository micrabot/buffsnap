import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BuildingIcon, CameraIcon, CheckIcon, CubeIcon, MapIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { organizationId, siteUrl, websiteId } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Matterport 3D Tours Buffalo NY | BuffSnap" },
  description:
    "Matterport-powered Google Maps business tours and commercial 3D capture in Buffalo and Western New York, backed by nearly 500 million Google Maps views.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Matterport 3D Tours Buffalo NY | BuffSnap",
    description:
      "Put your business inside Google Maps with premium Matterport capture, clear project pricing, and no required monthly BuffSnap subscription.",
    url: siteUrl,
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Matterport 3D Tours Buffalo NY | BuffSnap",
  description:
    "Matterport-powered Google Maps business tours and commercial 3D capture in Buffalo and Western New York.",
  isPartOf: { "@id": websiteId },
  about: { "@id": organizationId },
  inLanguage: "en-US",
};

const benefits = [
  "One agreed project price",
  "No required monthly BuffSnap subscription",
  "Professional Matterport capture—not basic phone panoramas",
  "Published to your Google Maps business presence",
  "Reusable for marketing, leasing, and customer engagement",
  "Local service backed by national-level project experience",
];

const experience = [
  "Collaborated on 3D capture of a 450,000-square-foot Nestlé Purina pet food facility in Dunkirk, New York",
  "Completed capture assignments at 42 Home Depot locations",
  "Dozens of veterinary clinics, retail stores, and shopping-mall conversion projects",
  "Gondola surveys, plenum surveys, and pre-scan data collection",
  "Medical facilities, dental offices, gyms, swim schools, and commercial properties",
  "3D tour services for apartment communities across New York State",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageJsonLd} />
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="shell hero-content">
            <div className="eyebrow">Matterport-powered Google business tours</div>
            <h1>Put Your Business Inside <em>Google Maps.</em></h1>
            <p className="hero-lead">Premium, immersive 3D tours that help customers explore your business before they arrive.</p>

            <div className="proof-card">
              <span className="proof-mark">G</span>
              <div><strong>Nearly 500 Million</strong><small>Views on Google Maps</small></div>
            </div>

            <div className="stat-row">
              <div><CubeIcon /><strong>Matterport since 2018</strong><span>Professional 3D capture</span></div>
              <div><CameraIcon /><strong>1,000+ tours</strong><span>Businesses &amp; properties</span></div>
              <div><MapIcon /><strong>Trusted expertise</strong><span>Google Street View veteran</span></div>
            </div>

            <div className="button-row">
              <Link className="button primary" href="#quote">Get a Tour Quote</Link>
              <Link className="button outline" href="/google-business-tours">Explore the Service</Link>
            </div>
          </div>
        </section>

        <section className="section value-section">
          <div className="shell split-grid">
            <div>
              <div className="eyebrow dark">A business asset—not another subscription</div>
              <h2>One Fair Price. Long-Term Visibility.</h2>
              <p className="section-lead">Your standard Google Maps business tour is an all-inclusive project. BuffSnap captures, processes, connects, and publishes the tour for one agreed price.</p>
              <div className="big-callout">
                <strong>No required monthly BuffSnap fee</strong>
                <span>to keep paying simply because your Google Maps tour exists.</span>
              </div>
              <p className="fine-print">Google Maps publication remains subject to Google availability, account status, and content policies. Optional ongoing hosting of a separate full Matterport digital twin or future updates can be quoted separately.</p>
            </div>
            <div className="benefit-panel">
              <h3>What your project includes</h3>
              <ul className="check-list">
                {benefits.map((item) => <li key={item}><span><CheckIcon /></span>{item}</li>)}
              </ul>
              <Link href="/google-business-tours" className="text-link">See the complete Google tour service →</Link>
            </div>
          </div>
        </section>

        <section className="section profile-gap-section">
          <div className="shell profile-gap-grid">
            <div className="profile-gap-copy">
              <div className="eyebrow dark">The overlooked part of a Google Business Profile</div>
              <h2>Customers Can See the Street. Can They See Inside?</h2>
              <p className="section-lead">Google Business Profiles already include photos and a Street View &amp; 360° area. Yet the immersive experience often stops at the road outside—or never meaningfully enters the business.</p>
              <div className="gap-callout">
                <strong>BuffSnap fills that gap.</strong>
                <span>We create a professional Matterport-powered interior walkthrough and publish it to your Google Maps business presence.</span>
              </div>
              <p className="fine-print">No ranking promises. No marketing gimmicks. Just a more complete visual profile where customers are already looking.</p>
              <Link href="/google-business-tours" className="button primary">See How It Works</Link>
            </div>

            <div className="profile-visual" aria-label="Illustration comparing exterior Street View with an interior business tour">
              <div className="profile-visual-top">
                <span className="profile-dot">B</span>
                <div><strong>Your Business on Google</strong><small>Photos · Street View &amp; 360°</small></div>
              </div>
              <div className="profile-tabs"><span>Photos</span><strong>Street View &amp; 360°</strong></div>
              <div className="profile-scenes">
                <div className="profile-scene outside-scene">
                  <small>What customers often find</small>
                  <strong>The road outside</strong>
                  <span>Exterior Street View</span>
                </div>
                <div className="profile-arrow" aria-hidden="true">→</div>
                <div className="profile-scene inside-scene">
                  <small>What BuffSnap adds</small>
                  <strong>A walk through your business</strong>
                  <span>Professional Matterport interior tour</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section tech-section">
          <div className="shell">
            <div className="section-heading centered">
              <div className="eyebrow dark">Serious 3D technology</div>
              <h2>Professional Matterport Quality</h2>
              <p>Different tools for different jobs—chosen for image quality, spatial accuracy, and the final deliverable.</p>
            </div>
            <div className="tech-grid">
              <article className="tech-card featured">
                <div className="camera-visual pro2"><span>PRO2</span></div>
                <div>
                  <small>Google Maps &amp; premium interiors</small>
                  <h3>Matterport Pro2</h3>
                  <p>Chris’s primary camera for polished, high-quality Google business tours and detailed interior capture.</p>
                </div>
              </article>
              <article className="tech-card">
                <div className="camera-visual pro3"><span>PRO3</span></div>
                <div>
                  <small>Large commercial &amp; AEC work</small>
                  <h3>Matterport Pro3</h3>
                  <p>Advanced LiDAR capture for large buildings, existing-condition documentation, engineering, and pre-construction assignments.</p>
                </div>
              </article>
              <article className="tech-card compact">
                <div className="round-camera">360°</div>
                <div>
                  <small>Specialized workflows</small>
                  <h3>Theta Z1 &amp; Insta360 X4</h3>
                  <p>Used primarily for Zillow 3D Home and selected lightweight capture needs—not as a substitute for premium Matterport work.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell split-grid reverse-mobile">
            <div className="experience-copy">
              <div className="eyebrow">Commercial depth behind every project</div>
              <h2>National-Level Capture Experience</h2>
              <p className="section-lead">BuffSnap is led by Chris Kivi, a Western New York Matterport technician trusted for demanding assignments from engineering firms and national project providers.</p>
              <ul className="check-list dark-list">
                {experience.map((item) => <li key={item}><span><CheckIcon /></span>{item}</li>)}
              </ul>
              <p className="disclosure">Named locations may represent work completed as an independent local capture technician or subcontractor. No endorsement or direct client relationship is implied.</p>
            </div>
            <div className="experience-panel">
              <BuildingIcon />
              <strong>450,000 sq ft</strong>
              <span>Largest highlighted industrial collaboration</span>
              <hr />
              <strong>42 locations</strong>
              <span>Home Depot capture assignments</span>
              <hr />
              <strong>Across New York</strong>
              <span>Apartment, retail, medical, and commercial projects</span>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="shell">
            <div className="section-heading centered">
              <div className="eyebrow dark">Two levels of 3D expertise</div>
              <h2>Choose the Right Capture Service</h2>
            </div>
            <div className="service-grid">
              <Link href="/google-business-tours" className="service-card">
                <MapIcon />
                <span>Customer-facing visibility</span>
                <h3>Google Maps Business Tours</h3>
                <p>Immersive tours for restaurants, retail, medical, hospitality, gyms, showrooms, apartment communities, and more.</p>
                <strong>Explore Business Tours →</strong>
              </Link>
              <Link href="/commercial-capture" className="service-card">
                <CubeIcon />
                <span>Engineering &amp; documentation</span>
                <h3>Commercial &amp; AEC Capture</h3>
                <p>Matterport Pro3 scanning, existing conditions, pre-construction documentation, surveys, measurements, and project data.</p>
                <strong>Explore Commercial Capture →</strong>
              </Link>
            </div>
          </div>
        </section>

        <section className="section quote-section" id="quote">
          <div className="shell quote-layout">
            <div>
              <div className="eyebrow">Start with a no-obligation quote</div>
              <h2>Let’s Put Your Business on the Map.</h2>
              <p>Tell us about the space. BuffSnap will recommend the right capture method and provide a clear project price.</p>
              <div className="quote-points">
                <span>✓ Local Western New York service</span>
                <span>✓ Professional Matterport capture</span>
                <span>✓ Straightforward scope and pricing</span>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <div className="mobile-sticky"><Link href="#quote">Get a Tour Quote</Link></div>
      <Footer />
    </>
  );
}
