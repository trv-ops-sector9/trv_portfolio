import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Traver Phillips",
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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');var d=t||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d);document.documentElement.style.colorScheme=d;})();` }} />
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          <main style={{ paddingBlockStart: "var(--nav-height)", minHeight: "100dvh" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
