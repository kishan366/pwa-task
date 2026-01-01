import "./globals.css";
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
      </head>
      <body className="min-h-screen bg-gray-100">
        <ClientProviders />
        {children}
      </body>
    </html>
  );
}
