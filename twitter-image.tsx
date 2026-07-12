import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BuffSnap handles information submitted through its website quote form.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />
      <Header />
      <main id="main-content" className="legal-page">
        <div className="shell legal-content">
          <div className="eyebrow dark">Effective July 11, 2026</div>
          <h1>Privacy Policy</h1>
          <p>BuffSnap collects only the information you voluntarily provide through the quote form, including your name, business name, email address, phone number, project location, service request, and project details.</p>
          <h2>How the information is used</h2>
          <p>Information is used to review your request, prepare an estimate, communicate about the project, schedule services, and maintain ordinary business records. BuffSnap does not sell quote-request information.</p>
          <h2>Service providers</h2>
          <p>The website is hosted through Vercel. Quote requests are transmitted through Resend and delivered to a private BuffSnap email inbox. These providers may process limited technical and message data to operate their services.</p>
          <h2>Retention and security</h2>
          <p>Information may be retained as reasonably needed for business, tax, legal, and customer-service purposes. No internet transmission or storage system can be guaranteed completely secure.</p>
          <h2>Analytics and future updates</h2>
          <p>This starter website does not include advertising trackers. If analytics, advertising pixels, or additional services are added later, this policy should be updated before they are activated.</p>
          <h2>Questions or requests</h2>
          <p>Use the <Link href="/#quote">BuffSnap quote form</Link> and state that your message concerns privacy.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
