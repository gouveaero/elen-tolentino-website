import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Elen Tolentino — Referência em Estomatologia e Laserterapia",
  description:
    "Capacite-se com a Dra. Elen Tolentino. Pós-Graduação Online em Estomatologia, Imersão Diagnóstico Total, Laserterapia e muito mais.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
