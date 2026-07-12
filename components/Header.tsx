import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="BuffSnap home">
          <span>BUFF</span><strong>SNAP</strong>
          <small>Matterport 3D. Trusted Results.</small>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/google-business-tours">Google Business Tours</Link>
          <Link href="/commercial-capture">Commercial &amp; AEC</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#quote" className="nav-cta">Get a Quote</Link>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
          <div className="mobile-nav-panel">
            <Link href="/google-business-tours">Google Business Tours</Link>
            <Link href="/commercial-capture">Commercial &amp; AEC</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#quote" className="nav-cta">Get a Quote</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
