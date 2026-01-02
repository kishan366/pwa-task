"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);

    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="sticky top-0 z-20 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">📱</span>
          <span className="font-semibold text-lg">
            PWA Task
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/news" className={linkClass("/news")}>
            News
          </Link>
          <Link href="/weather" className={linkClass("/weather")}>
            Weather
          </Link>
            <Link href="/calendar" className={linkClass("/calendar")}>
            Calendar
          </Link>
        </nav>

        {/* Online / Offline Status */}
        <div className="hidden sm:flex items-center gap-2 text-sm">
          <span
            className={`h-2 w-2 rounded-full ${
              online ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="text-gray-600">
            {online ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </header>
  );
}
