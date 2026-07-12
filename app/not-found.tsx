import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found-page">
        <div className="shell">
          <div className="eyebrow dark">404</div>
          <h1>That page is not on the map.</h1>
          <p>The address may have changed, or the page may no longer exist.</p>
          <Link href="/" className="button primary">Return to BuffSnap</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
