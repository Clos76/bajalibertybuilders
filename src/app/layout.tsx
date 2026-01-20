import "@/src/app/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
// Metadata including Open Graph
import Script from "next/script";

// Production-ready metadata with comprehensive SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://www.libertyconstructionbaja.com"),

  // Primary SEO tags
  title: {
    default:
      "Custom Beachfront Homes in Rosarito & Ensenada | Liberty Construction Baja",
    template: "%s | Liberty Construction Baja",
  },
  description:
    "Design and build custom California-style and Mediterranean beachfront homes in Rosarito and Ensenada for U.S & Canadian buyers. Luxury coastal living in Baja California.",

  keywords: [
    "beachfront homes Rosarito",
    "Ensenada custom homes",
    "Baja California real estate",
    "Mediterranean homes Mexico",
    "California style homes Baja",
    "custom home builder Rosarito",
    "luxury beachfront property",
    "coastal homes Ensenada",
    "US buyers Mexico real estate",
    "Canadian buyers Baja homes",
  ],

  authors: [{ name: "Liberty Construction Baja" }],
  creator: "Liberty Construction Baja",
  publisher: "Liberty Construction Baja",

  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.libertyconstructionbaja.com",
    siteName: "Liberty Construction Baja",
    title: "Custom Beachfront Homes in Rosarito & Ensenada",
    description:
      "Design and build custom California-style and Mediterranean beachfront homes in Rosarito and Ensenada for U.S & Canadian buyers. Luxury coastal living in Baja California.",
    images: [
      {
        url: "/images/libertyRanch/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Custom Beachfront Homes in Rosarito & Ensenada - Liberty Construction Baja",
        type: "image/png",
      },
    ],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "Custom Beachfront Homes in Rosarito & Ensenada",
    description:
      "Design and build custom California-style and Mediterranean beachfront homes in Rosarito and Ensenada for U.S & Canadian buyers.",
    images: ["/images/libertyRanch/opengraph-image.png"],
    creator: "@YourTwitterHandle", // Replace with your actual Twitter handle or remove
  },

  // Additional metadata
  alternates: {
    canonical: "https://www.libertyconstructionbaja.com",
  },

  // Verification tags (add when you have them)
  verification: {
    google: "830odMgBOn8O6jihQliPaGqQ-2wHEkByode0F3-7Pf4", // Get from Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Category for better classification
  category: "Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Real Estate */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Liberty Construction Baja",
              description:
                "Custom beachfront home builder specializing in California-style and Mediterranean homes in Rosarito and Ensenada",
              url: "https://www.libertyconstructionbaja.com",
              logo: "https://www.libertyconstructionbaja.com/images/libertyRanch/logo.png", // Add your logo
              image:
                "https://www.libertyconstructionbaja.com/images/libertyRanch/opengraph-image.png",
              telephone: "+1-858-758-7768", // Add your phone
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rosarito",
                addressRegion: "Baja California",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "32.09166871777422", // Update with actual coordinates
                longitude: "-116.85789147049978",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Rosarito",
                },
                {
                  "@type": "City",
                  name: "Ensenada",
                },
              ],
              priceRange: "$$$",
              serviceType: "Custom Home Construction",
              knowsAbout: [
                "Beachfront Construction",
                "Mediterranean Architecture",
                "California-Style Homes",
                "Luxury Real Estate",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Liberty Construction Baja",
              url: "https://www.libertyconstructionbaja.com",
              logo: "https://www.libertyconstructionbaja.com/images/libertyRanch/logo.png",
              sameAs: [
                "https://www.facebook.com/yourpage", // Update with actual social links
                "https://www.instagram.com/yourpage",
                // Add other social media profiles
              ],
            }),
          }}
        />
      </head>

      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
