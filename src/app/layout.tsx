import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";
import { generateMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import { getPersonJsonLd } from "@/lib/structured-data";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { PageTransition } from "@/components/shared/PageTransition";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  ...generateMetadata(),
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontVariables} font-body antialiased`}>
        {/* JSON-LD (Prompt 7): schema.org Person para resultados de búsqueda enriquecidos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonJsonLd()) }}
        />
        <ThemeProvider>
          <a
            href="#contenido-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-text-on-primary"
          >
            Saltar al contenido principal
          </a>
          <Navbar />
          <main id="contenido-principal">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
