import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UnitProvider } from "@/components/UnitProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fogrod.co.uk"),

  title: {
    default: "FOGRod® | Professional Wastewater Level Detection Systems",
    template: "%s | FOGRod®",
  },

  description:
    "FOGRod® designs and manufactures professional conductive level detection systems for wastewater pumping stations, sewage treatment works and industrial applications throughout the UK.",

  keywords: [
    "FOGRod",
    "Level Detection",
    "Conductive Level Detection",
    "Wastewater",
    "Wastewater Pumping Station",
    "Pump Station",
    "Sewage Pump",
    "Industrial Controls",
    "Level Probe",
    "Float Switch Alternative",
    "Pump Control",
    "Wastewater Monitoring",
  ],

  authors: [{ name: "FOGRod" }],
  creator: "FOGRod",
  publisher: "FOGRod",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "FOGRod®",
    description:
      "Professional wastewater level detection systems engineered for reliability.",
    url: "https://fogrod.co.uk",
    siteName: "FOGRod",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FOGRod®",
    description:
      "Professional wastewater level detection systems engineered for reliability.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-black">
        <UnitProvider>
          {children}
        </UnitProvider>
      </body>
    </html>
  );
}