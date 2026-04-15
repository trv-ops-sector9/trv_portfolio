import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Jost } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PageTransition } from "@/components/ui/PageTransition";
import "@/styles/globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Traver Phillips / portfolio of work",
    template: "%s | Traver Phillips",
  },
  description: "Senior product designer specializing in design systems and interaction detail that makes technology feel trustworthy and legible.",
  metadataBase: new URL("https://traverphillips.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://traverphillips.com",
    siteName: "Traver Phillips",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${jost.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');var d=t||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d);document.documentElement.style.colorScheme=d;})();` }} />
      </head>
      <body>
        <ThemeProvider>
          <ScrollToTop />
          <Nav />
          <main style={{ paddingBlockStart: "var(--nav-height)", minHeight: "100dvh" }}>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
