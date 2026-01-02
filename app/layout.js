import "./globals.css";
import Header from "../app/components/Header";
import BottomNav from "../app/components/BottomNav";
import ClientProviders from "../app/components/ClientProviders";

export const metadata = {
  title: "PWA Task App",
  description: "Progressive Web App using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      {/* pb-14 → space for bottom nav on mobile */}
      <body className="min-h-screen bg-gray-100 pb-14 md:pb-0">
        <ClientProviders />

        {/* Desktop header */}
        <Header />

        {/* Page content */}
        {children}

        {/* Mobile bottom nav */}
        <BottomNav />
      </body>
    </html>
  );
}
