import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand"><span>BUFF</span><strong>SNAP</strong></div>
          <p>Professional Matterport 3D capture, Google Maps business tours, and commercial documentation throughout Western New York.</p>
        </div>
        <div>
          <h3>Services</h3>
          <Link href="/google-business-tours">Google Business Tours</Link>
          <Link href="/commercial-capture">Commercial &amp; AEC Capture</Link>
          <Link href="/#quote">Request a Quote</Link>
        </div>
        <div>
          <h3>Service Area</h3>
          <p>Buffalo, Niagara, Western New York, and project locations across New York State.</p>
        </div>
      </div>
      <div className="shell legal-line">
        <span>© {new Date().getFullYear()} BuffSnap.</span>
        <span className="legal-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span>
        <span>Google, Google Maps, Street View, Matterport, and named project locations are trademarks of their respective owners. No endorsement is implied.</span>
      </div>
    </footer>
  );
}
