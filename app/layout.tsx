import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Traver Phillips",
    template: "%s — Traver Phillips",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Nav />
          <main style={{ paddingBlockStart: "48px", minHeight: "100dvh" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
