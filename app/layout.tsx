import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

// ── Icône de l'onglet ─────────────────────────────────────────────
// Place ton fichier dans public/ et indique le nom ici
// ex : public/icon.png  →  "/icon.png"
export const metadata: Metadata = {
  title: "Ma-Samba Dia — Portfolio",
  description: "Portfolio de Ma-Samba Dia, designer graphique",
  icons: {
    icon: [
      { url: "/Favicon SVG.svg",    type: "image/svg+xml" },
      { url: "/Favicon 32x32.png",  sizes: "32x32", type: "image/png" },
      { url: "/Favicon 16x16.png",  sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${ibmPlexMono.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
