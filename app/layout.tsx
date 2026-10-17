import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { RevealObserver } from "./components/RevealObserver";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { siteConfig } from "./data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Sahan S Liyanage | Physics Graduate",
    template: "%s | Sahan S Liyanage",
  },
  description: siteConfig.description,
  applicationName: "Sahan S Liyanage Academic Website",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    title: "Sahan S Liyanage | Physics Graduate",
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: "/images/sahan-liyanage-portrait.jpg",
        alt: "Sahan S Liyanage - Physics Graduate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahan S Liyanage | Physics Graduate",
    description: siteConfig.description,
    images: ["/images/sahan-liyanage-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#11161b" },
  ],
  colorScheme: "light dark",
};

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem("site-theme");
      const theme = saved === "light" || saved === "dark"
        ? saved
        : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  jobTitle: "Research Assistant",
  description: siteConfig.description,
  affiliation: {
    "@type": "Organization",
    name: "Arthur C. Clarke Institute for Modern Technologies",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Sri Lanka",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Colombo",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Sri Lanka",
    },
  },
  knowsAbout: [
    "Solar physics",
    "Space physics",
    "Plasma physics",
    "Astrophysics",
    "Atomic, molecular and optical physics",
    "Nuclear physics",
    "High-energy physics",
    "Condensed matter physics",
    "Experimental physics",
    "Computational physics",
    "Scientific software development",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
