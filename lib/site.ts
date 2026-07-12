export const siteUrl = "https://buffsnap.com";

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export const serviceAreas = [
  { "@type": "City", name: "Buffalo" },
  { "@type": "AdministrativeArea", name: "Western New York" },
  { "@type": "AdministrativeArea", name: "Niagara County" },
  { "@type": "State", name: "New York" },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "BuffSnap",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon-512.png`,
        width: 512,
        height: 512,
      },
      description:
        "Matterport-powered Google Maps business tours and commercial 3D capture serving Buffalo, Western New York, and project locations across New York State.",
      founder: {
        "@type": "Person",
        name: "Chris Kivi",
        jobTitle: "Matterport Capture Technician and Google Street View Photographer",
      },
      areaServed: serviceAreas,
      knowsAbout: [
        "Matterport Pro2 capture",
        "Matterport Pro3 capture",
        "Google Maps business virtual tours",
        "Google Street View photography",
        "Commercial and AEC reality capture",
        "Existing-condition documentation",
        "Pre-construction scanning",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Maps Business Tours",
            serviceType: "Matterport-powered Google Maps business virtual tours",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial and AEC Matterport Capture",
            serviceType: "Matterport Pro3 commercial and AEC capture",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "BuffSnap",
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  ],
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
