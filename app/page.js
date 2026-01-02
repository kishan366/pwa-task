import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-6">
      
      {/* Hero */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900">
        📱 PWA Task Application
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mb-12 text-lg">
        A modern Progressive Web App built with Next.js that works offline,
        is installable, and delivers fast, reliable performance — just like a real mobile app.
      </p>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-3 mb-12 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">⚡ Fast</h3>
          <p className="text-sm text-gray-600">
            Optimized loading using caching & modern web standards.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">📶 Offline Ready</h3>
          <p className="text-sm text-gray-600">
            Access content even without an internet connection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">⬇️ Installable</h3>
          <p className="text-sm text-gray-600">
            Install and use it like a native mobile application.
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/news"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-center"
        >
          📰 View Latest News
        </Link>

        <Link
          href="/weather"
          className="bg-sky-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-600 transition text-center"
        >
          🌦 Weather Check
        </Link>

        <Link
          href="/calendar"
          className="bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition text-center"
        >
          📅 Events Calendar
        </Link>
      </div>
    </main>
  );
}
