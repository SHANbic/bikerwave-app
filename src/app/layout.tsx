import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { URL } from "url";
import ogImage from "./opengraph-image.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balades Moto",
  description:
    "Votre prochaine balade moto est ici ! Créez ou rejoignez des balades, découvrez de nouveaux itinéraires et partenaires de route.",
  metadataBase: new URL("https://balades-moto.netlify.app/"),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
