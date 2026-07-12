import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

/** Display/Headings — geométrica, personalidad técnica (Prompt 2) */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Body/UI — estándar de legibilidad en SaaS moderno */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/** Code/Mono — snippets, tags de tecnología, números destacados */
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`;
