import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon, MapIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, organizationId, serviceAreas, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Maps Business Tours Buffalo NY",
  description:
    "Fill the often-overlooked Street View & 360° area of your Google Business Profile with a professional Matterport tour and no required monthly BuffSnap subscription.",
  alternates: { canonical: "/google-business-tours" },
  openGraph: {
    title: "Google Maps Business Tours Buffalo NY | BuffSnap",
    description:
      "Turn the often-overlooked Street View & 360° area of your Google Business Profile into a professional Matterport walkthrough.",
    url: `${siteUrl}/google-business-tours`,
    type: "website",
    locale: "en_US",
    siteName: "BuffSnap",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BuffSnap Matterport 3D tours and commercial capture" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Maps Business Tours Buffalo NY | BuffSnap",
    description: "Premium Matterport business tours published to Google Maps with one clear project price.",
    images: ["/twitter-image"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/google-business-tours/#service`,
  name: "Matterport-Powered Google Maps Business Tours",
  serviceType: "Google Maps business virtual tours",
  url: `${siteUrl}/google-business-tours`,
  provider: { "@id": organizationId },
  areaServed: serviceAreas,
  description:
    "Professional Matterport capture, processing, quality review, and publication to a business's Google Maps presence for one agreed project price.",
  offers: {
    "@type": "Offer",
    description: "One agreed project price with no required monthly BuffSnap subscription.",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbsJsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Google Maps Business Tours", path: "/google-business-tours" },
]);

const idealFor = ["Restaurants, cafés, and bars", "Retail stores and showrooms", "Hotels and hospitality", "Medical and dental offices", "Veterinary clinics", "Gyms, fitness, and swim schools", "Apartment communities", "Auto dealerships", "Schools and event venues", "Salons and spas"];

const googleBenefits = [
  {
    title: "Help people decide to visit",
    text: "Google says photos and virtual tours help people decide whether to visit a business.",
  },
  {
    title: "Show customers what to expect",
    text: "Let people preview your interior, facilities, shelves, menus, parking, and accessibility before they arrive.",
  },
  {
    title: "Make your business stand out",
    text: "Welcome customers inside and give them a stronger feel for your space and what it offers on Google Maps.",
  },
  {
    title: "Keep customers informed after changes",
    text: "When you remodel or add important features, updated imagery can show customers what is new and keep your online presentation current.",
  },
];

export default function GoogleToursPage() {
  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbsJsonLd]} />
      <Header />
      <main id="main-content">
        <section className="subhero google-subhero">
          <div className="shell subhero-content">
            <div className="icon-badge"><MapIcon /></div>
            <div className="eyebrow">Google Maps business tours</div>
            <h1>Let Customers Walk Through Your Business Before They Arrive.</h1>
            <p>Premium Matterport capture, professional processing, and publication to your Google Maps business presence—all handled by one experienced local provider.</p>
            <div className="button-row"><Link href="/#quote" className="button primary">Get a Tour Quote</Link><Link href="/#experience" className="button outline">See the Experience</Link></div>
          </div>
        </section>


        <section className="section profile-gap-section tour-page-gap">
          <div className="shell profile-gap-grid">
            <div className="profile-gap-copy">
              <div className="eyebrow dark">An underused space hiding in plain sight</div>
              <h2>Your Profile Shows the Street. BuffSnap Shows the Business.</h2>
              <p className="section-lead">Open a Google Business Profile and you will see photos plus a Street View &amp; 360° area. On many profiles, that immersive area shows only the roadway outside, scattered panoramas, or no useful interior experience at all.</p>
              <div className="gap-callout">
                <strong>That is the opportunity.</strong>
                <span>BuffSnap professionally captures the inside of the business with Matterport and connects the walkthrough to the place customers already search.</span>
              </div>
              <p className="fine-print">The goal is simple: complete the visual profile—not make unverifiable promises about rankings or sales.</p>
            </div>

            <div className="profile-visual" aria-label="Illustration comparing exterior Street View with an interior business tour">
              <div className="profile-visual-top">
                <span className="profile-dot">B</span>
                <div><strong>Your Business on Google</strong><small>Photos · Street View &amp; 360°</small></div>
              </div>
              <div className="profile-tabs"><span>Photos</span><strong>Street View &amp; 360°</strong></div>
              <div className="profile-scenes">
                <div className="profile-scene outside-scene">
                  <small>Before BuffSnap</small>
                  <strong>Customers stop at the curb</strong>
                  <span>Roadside imagery only</span>
                </div>
                <div className="profile-arrow" aria-hidden="true">→</div>
                <div className="profile-scene inside-scene">
                  <small>After BuffSnap</small>
                  <strong>Customers can step inside</strong>
                  <span>Matterport-powered interior experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell split-grid">
            <div>
              <div className="eyebrow dark">A straightforward investment</div>
              <h2>One Project Price. No Required Monthly BuffSnap Subscription.</h2>
              <p className="section-lead">BuffSnap’s standard service includes on-site capture, image processing, tour connections, quality review, and Google Maps publication.</p>
              <p>You are not signing up for another monthly marketing bill merely to keep paying BuffSnap because the Google tour exists. It is designed as a long-term visual asset that can continue creating engagement well after the original shoot.</p>
              <p className="fine-print">Google controls its own platform and may change, remove, or restrict content under its policies. Optional hosting of the separate full Matterport digital twin, website enhancements, or future rescans are separate only when requested.</p>
            </div>
            <div className="metric-panel">
              <strong>Nearly 500M</strong><span>Google Maps views</span>
              <strong>Since 2018</strong><span>Professional Matterport capture</span>
              <strong>1,000+</strong><span>3D tours created</span>
            </div>
          </div>
        </section>


        <section className="section google-proof-section">
          <div className="shell">
            <div className="section-heading centered">
              <div className="eyebrow dark">Benefits described by Google</div>
              <h2>Give Customers a Better Look Before They Visit</h2>
              <p>Google presents photos and virtual tours as tools that can strengthen a business’s visual presence and help customers understand a location before arriving.</p>
            </div>
            <div className="google-benefit-grid">
              {googleBenefits.map((item) => (
                <article key={item.title}>
                  <span><CheckIcon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="study-callout">
              <strong>Google-published research: 2× more likely to generate interest</strong>
              <p>A 2015 study of 1,201 consumers researching a hotel or restaurant found listings with photos and a virtual tour were twice as likely to generate interest as alternate listings without a tour.</p>
              <small>Historical research limited to hotel and restaurant reservation interest; individual results vary. BuffSnap does not guarantee rankings, traffic, visits, or sales.</small>
              <a href="https://www.google.com/streetview/business/" target="_blank" rel="noreferrer">See Google’s current business Street View guidance →</a>
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="shell">
            <div className="section-heading centered"><div className="eyebrow dark">Who it is for</div><h2>Perfect for Places Customers Want to Explore</h2></div>
            <div className="pill-grid">
              {idealFor.map((item) => <div key={item}><span><CheckIcon /></span>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section steps-section">
          <div className="shell">
            <div className="section-heading centered"><div className="eyebrow dark">How it works</div><h2>Simple for the Business Owner</h2></div>
            <div className="steps-grid">
              <article><b>1</b><h3>Tell Us About the Space</h3><p>Share the location, size, type of business, and what you want customers to see.</p></article>
              <article><b>2</b><h3>Schedule Capture</h3><p>We choose a time that minimizes disruption and prepares the space for its best presentation.</p></article>
              <article><b>3</b><h3>Matterport Capture</h3><p>BuffSnap professionally scans the interior with the capture system best suited to the project.</p></article>
              <article><b>4</b><h3>Process &amp; Publish</h3><p>We review, connect, prepare, and publish the experience to Google Maps.</p></article>
            </div>
            <div className="center-cta"><Link href="/#quote" className="button primary">Request My Quote</Link></div>
          </div>
        </section>
      </main>
      <div className="mobile-sticky"><Link href="/#quote">Get a Tour Quote</Link></div>
      <Footer />
    </>
  );
}
