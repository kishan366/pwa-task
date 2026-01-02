import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center justify-center px-4 sm:px-6 py-14">

      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          📱 PWA Task Application
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          A modern Progressive Web App built with Next.js that works offline,
          installs like a mobile app, and delivers fast, reliable performance.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-14 w-full max-w-5xl">
        {[
          {
            icon: "⚡",
            title: "Fast Performance",
            desc: "Optimized loading using caching and modern web standards."
          },
          {
            icon: "📶",
            title: "Offline Ready",
            desc: "Access content even without an active internet connection."
          },
          {
            icon: "⬇️",
            title: "Installable",
            desc: "Install and use it just like a native mobile application."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition text-center"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href="/news"
          className="w-full sm:w-auto bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-center shadow-md"
        >
          📰 Latest News
        </Link>

        <Link
          href="/weather"
          className="w-full sm:w-auto bg-sky-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-sky-600 transition text-center shadow-md"
        >
          🌦 Weather
        </Link>

        <Link
          href="/calendar"
          className="w-full sm:w-auto bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition text-center shadow-md"
        >
          📅 Events
        </Link>
      </div>

      {/* Footer hint (mobile-app feel) */}
      <p className="mt-10 text-xs text-gray-400 text-center">
        Install this app for a better offline experience 📲
      </p>
    </main>
  );
}
