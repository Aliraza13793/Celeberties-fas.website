import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Celebrity Fashion | Celebrity News, Style & Red Carpet Looks",
    template: "%s | Celebrity Fashion",
  },
  description:
    "Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates. Stay ahead of the trends.",
  keywords: [
    "celebrity fashion",
    "celebrity news",
    "red carpet fashion",
    "street style",
    "luxury brands",
    "designer collections",
    "beauty tips",
    "fashion trends",
  ],
  authors: [{ name: "Celebrity Fashion" }],
  creator: "Celebrity Fashion",
  publisher: "Celebrity Fashion",
  metadataBase: new URL("https://celebrityfashion.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://celebrityfashion.com",
    siteName: "Celebrity Fashion",
    title: "Celebrity Fashion | Celebrity News, Style & Red Carpet Looks",
    description:
      "Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates.",
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Celebrity Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebrity Fashion | Celebrity News, Style & Red Carpet Looks",
    description:
      "Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates.",
    images: ["/images/og-default.svg"],
    creator: "@celebrityfashion",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Celebrity Fashion",
              url: "https://celebrityfashion.com",
              description:
                "Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates.",
            }),
          }}
        />
      </body>
    </html>
  );
}
