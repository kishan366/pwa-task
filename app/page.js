import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      
      {/* Hero */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
        📱 PWA Task Application
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mb-10 text-sm sm:text-base md:text-lg">
        A modern Progressive Web App built with Next.js that works offline,
        is installable, and delivers fast, reliable performance — just like a real mobile app.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 w-full max-w-4xl">
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-base sm:text-lg mb-1">
            ⚡ Fast
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Optimized loading using caching & modern web standards.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-base sm:text-lg mb-1">
            📶 Offline Ready
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Access content even without an internet connection.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-base sm:text-lg mb-1">
            ⬇️ Installable
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Install and use it like a native mobile application.
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href="/news"
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-center"
        >
          📰 View Latest News
        </Link>

        <Link
          href="/weather"
          className="w-full sm:w-auto bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition text-center"
        >
          🌦 Weather Check
        </Link>

        <Link
          href="/calendar"
          className="w-full sm:w-auto bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition text-center"
        >
          📅 Events Calendar
        </Link>
      </div>
    </main>
  );
}
