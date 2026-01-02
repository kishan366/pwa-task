import "./globals.css";
import ClientProviders from "../app/components/ClientProviders";
import Header from "../app/components/Header";

export const metadata = {
  title: "PWA Task App",
  description: "Progressive Web App using Next.js",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PWA Task",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />

        {/* Viewport for Mobile */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Apple PWA Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
      </head>

      <body className="min-h-screen bg-gray-100 antialiased">
        <ClientProviders />
        <Header />
        {children}
      </body>
    </html>
  );
}
