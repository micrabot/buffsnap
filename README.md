# BuffSnap website starter

A mobile-first Next.js 16 website for BuffSnap, focused on:

- Matterport-powered Google Maps business tours
- A central “customers can see the street—can they see inside?” Google Business Profile positioning section
- One clear project price with no required monthly BuffSnap subscription
- Chris Kivi's nearly 500 million Google Maps views
- Matterport Pro2 and Pro3 expertise
- Commercial/AEC scanning and data collection
- Quote requests delivered privately through Resend

## Included launch and SEO essentials

- Page-specific titles and meta descriptions
- Canonical URLs
- Open Graph and X/Twitter sharing images
- Organization, WebSite, WebPage, Service, and Breadcrumb JSON-LD
- XML sitemap at `/sitemap.xml`
- Robots file at `/robots.txt`
- Web app manifest and branded icons
- Google Search Console verification environment variable
- Privacy and terms pages
- Accessible skip link, visible focus states, and live form status
- Basic bot suppression, server-side validation, and security headers

The schema intentionally uses `Organization` rather than incomplete `LocalBusiness` markup because BuffSnap does not currently publish a customer-facing street address. Add real address, telephone, hours, and verified profile details later only if they are accurate and appropriate to display.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub + Vercel

1. Create a new GitHub repository.
2. Upload all project files, excluding `node_modules` and `.next`.
3. In Vercel, choose **Add New → Project** and import the repository.
4. Vercel will detect Next.js automatically. Click **Deploy**.
5. Add `buffsnap.com` under **Project Settings → Domains**.
6. Redirect `www.buffsnap.com` to the preferred `buffsnap.com` domain in Vercel.

## Connect the private quote form

The site never displays your email or phone number publicly. Quote requests are sent through Resend.

1. Create a Resend account and verify a sending domain.
2. In Vercel, open **Project Settings → Environment Variables**.
3. Add:

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
QUOTE_TO_EMAIL
```

Use `.env.example` as the template. Redeploy after adding the variables.

Before running paid ads, add Cloudflare Turnstile or another production-grade rate-limiting layer to the quote form. The starter includes a honeypot, timing check, field limits, and server-side validation, but those are not a complete anti-spam system.

## Connect Google Search Console

1. Add the domain property in Google Search Console and verify through DNS when possible.
2. DNS verification is preferred because it covers all protocols and subdomains.
3. If you use the HTML-tag method, add the token as:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

4. Submit `https://buffsnap.com/sitemap.xml` after the production domain is live.
5. Test the deployed pages with Google's Rich Results Test and URL Inspection.

## Replace the sample photography

The current hero images use external Unsplash placeholders so the starter looks polished immediately. Replace the URLs in `app/globals.css` with Chris's own commercial, Google-tour, or Matterport project images before promotion.

## Important wording note

The site intentionally says:

> No required monthly BuffSnap subscription.

It does not guarantee that third-party content will remain online forever. Google controls Google Maps availability and content policies. Optional continued hosting of a separate full Matterport digital twin can be priced separately from the Google Maps publication.

## Recommended next edits

- Add 3–6 real embedded tour examples.
- Replace generic photography with Chris's work.
- Add actual service-area cities supported by real project experience.
- Decide whether to publish starting prices or keep quote-based pricing.
- Add a verified Google Business Profile URL to Organization schema when ready.
- Add real social profile URLs to `sameAs` only after those profiles exist.
- Add analytics only after choosing a privacy approach and updating the privacy policy.
